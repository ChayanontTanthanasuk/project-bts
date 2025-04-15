const express = require('express');
const router = express.Router();
const { addTravelHistory, getTravelHistory } = require('../controllers/travelControllers');
const { authenticateToken } = require('../middleware/authMiddleware');

// POST /api/travel (ต้องล็อกอินก่อน)
router.post('/travel', authenticateToken, addTravelHistory);

// GET ประวัติเดินทาง
router.get('/user/:userId/travel-history', getTravelHistory);

module.exports = router;
