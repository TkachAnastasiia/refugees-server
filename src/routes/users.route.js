const express = require('express');
const router = express.Router();
const usersRoute = require('../controllers/user.controller');

router.post('/create', usersRoute.create);

module.exports = router;
