'use strict';
const bcryptjs = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile)
      User.hasMany(models.Credit)
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    validate: {
      notNull: {
        msg: `Email can not be null`
      },
      notEmpty: {
        msg: `Email can not be empty`
      },
      isEmail: true,
    }},
    password: {
      type: DataTypes.STRING,
      allowNull:false,
    validate: {
      notNull: {
        msg: `Password can not be null`
      },
      notEmpty: {
        msg: `Password can not be empty`
      }
    }},
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user, options) => {
    const salt = bcryptjs.genSalt(10) 
    const hash = bcryptjs.hashSync(user.password , salt) 

    user.password = hash
  });
  return User;
};