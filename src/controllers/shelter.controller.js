const shelter = require('../services/shelter.service');
async function create(req, res, next) {
  try {
    res.json(await shelter.create(req.body));
  } catch (err) {
    console.error(`Error while creation `, err.message);
    next(err);
  }
}

async function getOwn(req, res, next) {
  try {
    res.json(await shelter.getOwn(req.param('userId')));
  } catch (err) {
    console.error(`Error while request `, err.message);
    next(err);
  }
}

async function getByCity(req, res, next) {
  try {
    res.json(await shelter.getByCity(req.param('city')));
  } catch (err) {
    console.error(`Error while request `, err.message);
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    res.json(await shelter.getById(req.param('shelterId')));
  } catch (err) {
    console.error(`Error while request `, err.message);
    next(err);
  }
}

async function updateMessage(req, res, next) {
  try {
    res.json(await shelter.updateMessage(req.body));
  } catch (err) {
    console.error(`Error while request `, err.message);
    next(err);
  }
}

module.exports = {
  create,
  getOwn,
  getByCity,
  getById,
  updateMessage,
};
