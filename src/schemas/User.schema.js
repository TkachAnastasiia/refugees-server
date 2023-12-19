const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  registrationDate: { type: Date, required: true, default: Date.now() },
  status: { type: String, required: true },
  number:{ type: String, required: true },
  email: { type: String, required: true },
  shelters: { type: [String], required: true },
  password: { type: String, required: true }
});

module.exports = {
  UserSchema,
}
