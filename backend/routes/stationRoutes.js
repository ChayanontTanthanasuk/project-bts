const express = require('express');
const router = express.Router();
const { addStations } = require('../controllers/stationControllers');

// เพิ่มหลายสถานี
router.post('/stations', addStations); // done

module.exports = router;
