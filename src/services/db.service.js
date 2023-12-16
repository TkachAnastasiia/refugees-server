const mongoose = require('mongoose');
const uri = require('../configs/db.config');

async function dbConnect() {
  try {
    await mongoose.connect(uri);
    console.log('Database connected!');
  } catch (e) {
    throw e;
  }
}

module.exports = {
  dbConnect,
}
