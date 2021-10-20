var express = require('express');
var router = express.Router();
const propsCtrl = require('../controllers/props');


router.get('/', propsCtrl.index);

// New 
router.get('/new', propsCtrl.new);
router.post('/', propsCtrl.create);
router.get('/:id', propsCtrl.show);
router.delete('/:id', propsCtrl.delete);
router.get('/:id/edit', propsCtrl.edit);
router.put('/:id', propsCtrl.update);

module.exports = router;