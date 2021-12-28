const express = require('express');
const costsController = require('../controllers/costs');

const router = express.Router();

router.post("/costs", costsController.calculateCosts);

module.exports = router;