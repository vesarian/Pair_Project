const router = require('express').Router();
const user = require('./user');
const profile = require('./profile');
const item = require('./item');

router.get('/' , (req, res) => {
    res.redirect('/items')
})

router.use('/users', user)
router.use('/profiles', profile)
router.use('/items', item)


module.exports = router