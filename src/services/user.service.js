const mongoose = require('mongoose');
const { UserSchema } = require('../schemas/User.schema');

async function create(userData) {
  const User = mongoose.model('user', UserSchema);
  await User.createCollection();
  const newUser = new User(userData);
  newUser.save()
    .then(result => {
      console.log('Record saved:', result);
    })
    .catch(error => {
      console.error('Error saving record:', error);
    });
  return { message: 'done' };
}

module.exports = {
  create,
}
