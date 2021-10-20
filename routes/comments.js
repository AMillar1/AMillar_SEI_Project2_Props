const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/props/:id/comments', reviewsCtrl.create);
router.delete('/props/:id', reviewsCtrl.delete);

module.exports(router);