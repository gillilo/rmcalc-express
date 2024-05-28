// routes/oneRMRoutes.js
const express = require('express');
const router = express.Router();
const { calcAll, calcAvg, calcOne, calcOneV, home } = require('../controllers/oneRMController');

router.get('/', home);
router.post('/calc', calcAll);
router.get('/calc', calcAvg);
router.post('/calc/:abbreviation', calcOne);
router.get('/calc/:abbreviation', calcOneV);

module.exports = router;
