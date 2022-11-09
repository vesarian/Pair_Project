const router = require('express').Router();
const user = require('./user');
const profile = require('./profile');
const credit = require('./credit');

router.get("/", (req, res) => {
    res.render('index')
})

router.use('/users', user)
router.use('/profiles', profile)
router.use('/credits', credit)


module.exports = router