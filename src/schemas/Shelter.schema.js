const mongoose = require('mongoose');
const {types} = require('util');
const { Schema } = mongoose;

const ShelterSchema = new Schema({
  owner: { type: String, required: true },
  city: { type: String, required: true },
  photo: { type: String, required: true },
  address: { type: String, required: true },
  capacity: { type: Number, required: true },
  description: { type: String, required: true },
  messages: { type: [{ message: String, authorName: String }], required: false }
});

module.exports = {
  ShelterSchema,
}
