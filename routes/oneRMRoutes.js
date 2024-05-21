// routes/oneRMRoutes.js
const express = require('express');
const router = express.Router();
const { calcAll, calcOne } = require('../controllers/oneRMController');

router.post('/calc', calcAll);
router.post('/calc/:abbreviation', calcOne);

module.exports = router;
