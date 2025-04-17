const express = require('express');
const { addResult, getResults } = require('../controllers/result');

const router = express.Router();


router.post('/results', addResult);


router.get('/results', getResults);

module.exports = router;