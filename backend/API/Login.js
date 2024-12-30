const express = require('express');
const router = new express.Router();
const passport = require('passport')
const Instagram = require('passport-instagram')
const InstagramStrategy = require('passport-instagram').Strategy
require('dotenv').config()

var INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID
var INSTAGRAM_CLIENT_SECRET = process.env.INSTAGRAM_CLIENT_SECRET;

// 5WEPC23VEMUWJID42QXATMWP2C54EDXM

passport.serializeUser((user, done) => { done(null, user) });
passport.deserializeUser((user, done) => { done(null, user) })

//Different application such as Instagram, Twitter or Google can have different authentication methods. 
//PassposJS bundles different authentication mechanisms into modules which are called as strategies
passport.use(new InstagramStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    callbackURL: "https://localhost:3000/auth/instagram/callback"
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ 'instagram.id': profile.id }, function (err, user) {
        if (err) return callback(err);
        if (user) {
            return done(null, user); // Check if user already exists
        }
        const {
            id,
            full_name,
            username,
            profile_picture,
            bio,
            website,
            counts: { media, follows, followed_by }
        } = profile._json.data;
        const new_user = new User({
            instagram: {
                id,
                accessToken,
                full_name,
                username,
                profile_picture,
                bio,
                website,
                counts: {
                    media,
                    follows,
                    followed_by
                }
            }
        });
        new_user.save(function (err, user) { //saving a new user into mongo
            if (err) {
                throw err;
            }
            return done(null, user);
        });
    });
}))

//Now we will configure some routes to create a login flow.
router.get('/auth/instagram', passport.authenticate('instagram'), () => {
    console.log("Inside the route");
});
router.get('/auth/instagram/callback',
    passport.authenticate('instagram', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    })
);

router.get('/profile', ensureAuthenticated, (request, response) => {
    const { instagram } = request.user;
    response.render('profile', { user: instagram });
});

function ensureAuthenticated(request, response, next) {
    if (request.isAuthenticated()) {
        return next();
    }
    response.redirect('/');
}

// router.get('/logout', function (req, res) {
//     req.logout();
//     res.redirect('/');
// });

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email + password);
})

module.exports = router;

