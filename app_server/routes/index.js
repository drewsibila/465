var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlTrips = require('../controllers/trips');

router.get('/', ctrlMain.index);
router.get('/travel', ctrlMain.travel);
router.get('/api/trips', ctrlTrips.tripsList);

module.exports = router;