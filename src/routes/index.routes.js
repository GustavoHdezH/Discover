const { Router } = require('express');
const router = Router();

const { index } = require('../controllers/index.controller');

router.get('/', index);

router.get('/signup',index);

router.post('/signup', index);

router.get('/signin', index);

router.post('/signin', index);

module.exports = router;