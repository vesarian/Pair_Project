const { Item } = require('../models/index')
const { Op } = require('sequelize')
const {rupiah} = require('../helpers/index')

class ItemControl {

    static itemList(req , res) {
        Item.findAll() 
            .then((Item) => {
                res.render('itemList' , {Item , rupiah})
            }).catch((err) => {
                res.send(err) 
            });
    }

    static readAll(req, res) {
        Item.sortPrice()
            .then((Item) => {
                res.render('index', { Item  , rupiah })
            }).catch((err) => {
                res.send(err)
                console.log(err);
            });
    }

    static renderAdd(req, res) {
        res.render('add')
        
    }

    static handlerAdd(req, res) {
        const { item, itemPrice, duration, imgUrl } = req.body
        Item.create({item, itemPrice, duration, imgUrl})
        .then((Item) => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }

    static renderEdit(req, res) {
        const { id } = req.params
        Item.findOne({
            where: {
                id
            }
        })
        .then((Item) => {
            res.render('edit', { Item })
        }).catch((err) => {
            res.send(err)
        });
        
    }

    static handlerEdit(req, res) {
        const { id } = req.params
        const { item, itemPrice, duration, imgUrl } = req.body

        Item.update({item, itemPrice, duration, imgUrl}, {
            where: { id }
        })
        .then((Item) => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }

    static delete(req, res) {
        const { id } = req.params
        Item.destroy({
            where: { id }
        })
        .then((Item) => {
            res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    }
}
module.exports = ItemControl