const {User , Profile} = require('../models')


class UserControl {

    static listUser(req , res){
        User.findAll({
            include:{
                model: Profile 
            }
        } , {
            order: [['id' , 'ASC']]
        })
        .then((data)=>{
          res.render('listUser' , {data})
        }).catch((err) =>{
            res.send(err)
        })
    }

    static registerForm(req , res) {
        res.render('formRegister')
    } 

    static register(req , res){
        const {email , password} = req.body 

        console.log(email,password) 
        // User.create({email , password})
        // .then(() => {
        //     res.redirect('/')
        // })
        // .catch((err) => {
        //     res.send(err)
        // })
    }
}

module.exports = UserControl