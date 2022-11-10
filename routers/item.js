const router = require('express').Router();
const ItemControl = require('../controllers/itemControl');


router.get('/', ItemControl.readAll)
router.get('/add', ItemControl.renderAdd)
router.post('/add', ItemControl.handlerAdd)
router.get('/itemList', ItemControl.itemList) 
router.get('/:id/itemDetail' , ItemControl.itemDetail)
router.get('/:id/edit', ItemControl.renderEdit)
router.post('/:id/edit', ItemControl.handlerEdit)
router.get('/:id/delete', ItemControl.delete)

module.exports = router