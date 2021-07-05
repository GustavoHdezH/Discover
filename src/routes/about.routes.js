const { Router } = require('express');
const router = Router();

const { about } = require('../controllers/about.controller')

router.get('/about', about);

module.exports = router;