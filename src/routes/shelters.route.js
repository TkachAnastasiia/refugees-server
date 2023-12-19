const express = require('express');
const router = express.Router();
const sheltersRoute = require('../controllers/shelter.controller');

router.post('/create', sheltersRoute.create);
router.get('/get-own/:userId', sheltersRoute.getOwn);
router.get('/get-by-city/:city', sheltersRoute.getByCity);
router.get('/:shelterId', sheltersRoute.getById);
router.post('/message', sheltersRoute.updateMessage);
module.exports = router;
