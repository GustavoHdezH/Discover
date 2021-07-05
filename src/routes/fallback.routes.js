const { Router } = require('express');
const router = Router();

const { fallback } = require('../controllers/fallback.controller');

router.get('*',fallback);

module.exports = router;