import mongoose from 'mongoose';
const { Schema } = mongoose;

const ShelterSchema = new Schema({
  city: { type: String, required: true },
  photos: { type: String, required: true },
  address: { type: String, required: true },
  capacity: { type: Number, required: true },
});

module.exports = {
  ShelterSchema,
}
