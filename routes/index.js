var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/props');
  // res.render('index', { title: 'Props' });
});

router.get(
  '/auth/google',
  passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  )
);

// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate(
    'google',
    {
      successRedirect: '/props',
      failureRedirect: '/props'
    }
  )
);

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/movies');
});

module.exports = router;
