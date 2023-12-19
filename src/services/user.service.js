const mongoose = require('mongoose');
const { UserSchema } = require('../schemas/User.schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10; // Number of salt rounds, you can adjust this value
const secretKey = require('../configs/token');
const { promisify } = require('util');

// Promisify the bcrypt.hash function
const hashAsync = promisify(bcrypt.hash);

async function comparePasswords(enteredPassword, hashedPasswordFromDatabase) {
  try {
    return await bcrypt.compare(enteredPassword, hashedPasswordFromDatabase);
  } catch (error) {
    return false;
  }
}

async function hashPassword(password) {
  try {
    // Hash the password asynchronously
    return await hashAsync(password, saltRounds);
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error; // Re-throw the error for handling in the calling function
  }
}


async function create(userData) {
  const User = mongoose.model('user', UserSchema);
  await User.createCollection();
  const hash = await hashPassword(userData.password);
  const newUser = new User({...userData, password: hash });
  return await newUser.save()
    .then(result => {
      const options = {
        expiresIn: '12h', // Token expires in 12 hour
      };
      const token = jwt.sign({id: result._id, name: result.name, status: result.status}, secretKey, options);
      return { token };
    })
    .catch(error => {
      console.error('Error saving record:', error);
      return { error };
    });
}

async function login(loginData) {
  const User = mongoose.model('user', UserSchema);
  return await User.find({ email: loginData.email })
    .then(async record => {
      const selected = record[0];
      const isVerified = await comparePasswords(loginData.password, selected.password);
        if (isVerified) {
          const options = {
            expiresIn: '12h', // Token expires in 5 hour
          };
          const token = jwt.sign({id: selected._id, name: selected.name, status: selected.status}, secretKey, options);
          return { token }
        } else {
          return  { error: 'Incorrect Password!' }
        }
    })
    .catch(error => {
      console.error(error, ' error');
      return { error }
    });
}

module.exports = {
  create,
  login,
}
