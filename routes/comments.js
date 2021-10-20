const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');

router.post('/props/:id/comments', isLoggedIn, commentsCtrl.create);
router.delete('/props/:id', isLoggedIn, commentsCtrl.delete);

module.exports = router;