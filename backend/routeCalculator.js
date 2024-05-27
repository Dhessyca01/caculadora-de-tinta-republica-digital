const express = require('express');
const router = express.Router();
const controlCalculator = require('./control/calculatorControl');

router.post('/calcular', controlCalculator.calculatePaint);

module.exports = router;
