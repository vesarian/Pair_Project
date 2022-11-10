const {Profile} = require('../models')

const { Op } = require("sequelize");
class ProfileControl {
   
    static editFormProfile(req , res){
        const id = req.params.id
        Profile.findOne({where: {
            id
        }})
        .then((data) => {
           //res.send(data)
           res.render('formEditUser' , {data})
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static editSubmitProfile(req, res) {
        const id = req.params.id 
        const {name , age , address} = req.body
       
        Profile.update({name , age , address } , {where: {id:id}})
        .then((data) => {
           res.redirect('/users')
        })
        .catch((err) => {
            res.send(err);
        })
    }
    
}

module.exports = ProfileControl