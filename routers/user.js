const router = require('express').Router();
const UserControl = require('../controllers/userControl');

router.get('/' , UserControl.listUser)
router.get('/register' , UserControl.registerForm)
router.post('/register' , UserControl.register) 



module.exports = router