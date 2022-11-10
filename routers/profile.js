const router = require('express').Router();
const ProfileControl = require('../controllers/profileControl');


router.get('/edit/:id', ProfileControl.editFormProfile)
router.post('/edit/:id', ProfileControl.editSubmitProfile)

module.exports = router