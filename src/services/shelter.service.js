const mongoose = require('mongoose');
const { ShelterSchema } = require('../schemas/Shelter.schema');

async function create(shelterData) {
  const Shelter = mongoose.model('shelter', ShelterSchema);
  await Shelter.createCollection();
  const newShelter = new Shelter(shelterData);
  return await newShelter.save()
    .then(result => result)
    .catch(error => {
      console.error('Error saving record:', error);
      return { error };
    });
}

async function getOwn(userId) {
  const Shelter = mongoose.model('shelter', ShelterSchema);
  return await Shelter.find({ owner: userId })
    .then(async records => {
      return records;
    })
    .catch(error => {
      return { error }
    });
}

async function getByCity(city) {
  const Shelter = mongoose.model('shelter', ShelterSchema);
  return await Shelter.find({ city })
    .then(async records => {
      return records;
    })
    .catch(error => {
      return { error }
    });
}

async function getById(shelterId) {
  const Shelter = mongoose.model('shelter', ShelterSchema);
  return await Shelter.findById(shelterId)
    .then(async record => {
      return record;
    })
    .catch(error => {
      return { error }
    });
}

async function updateMessage(data) {
  const Shelter = mongoose.model('shelter', ShelterSchema);
  return await Shelter.findByIdAndUpdate(data._id, data)
    .then(async record => {
      return record;
    })
    .catch(error => {
      return { error }
    });
}

module.exports = {
  create,
  getOwn,
  getByCity,
  getById,
  updateMessage,
}
