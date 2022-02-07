const { getChart } = require('./../controllers/externalApi')
const express = require('express');
const router = express.Router();


router.get('/', getChart);

module.exports = router