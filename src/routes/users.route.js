const express = require('express');
const router = express.Router();
const usersRoute = require('../controllers/user.controller');

router.post('/create', usersRoute.create);
router.post('/login', usersRoute.login);

module.exports = router;
