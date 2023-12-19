const user = require('../services/user.service');
async function create(req, res, next) {
  try {
    res.json(await user.create(req.body));
  } catch (err) {
    console.error(`Error while creation `, err.message);
    next(err);
  }
}

async function login(req, res, next) {
  try {
    res.json(await user.login(req.body));
  } catch (err) {
    console.error(`Error while login `, err.message);
    next(err);
  }
}

module.exports = {
  create,
  login,
};
