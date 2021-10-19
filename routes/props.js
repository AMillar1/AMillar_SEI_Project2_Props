var express = require('express');
var router = express.Router();
const propsCtrl = require('../controllers/props');
const isLoggedIn = require('../config/auth')


router.get('/', propsCtrl.index);

// New 
router.get('/new', propsCtrl.new);
router.post('/', propsCtrl.create);
router.get('/:id', propsCtrl.show);

module.exports = router;