'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.hasMany(models.Credit)
      Profile.belongsTo(models.User)
    }
  }
  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    validate: {
      notNull: {
        msg: `Name must be filled`
      },
      notEmpty: {
        msg: `Name must not be empty`
      }
    }},
    age: {
      type: DataTypes.INTEGER,
      allowNull:false,
    validate: {
      notNull: {
        msg: `Age must be filled`
      },
      notEmpty: {
        msg: `Age must not be empty`
      }
    }},
    address: {
      type: DataTypes.STRING,
      allowNull:false,
    validate: {
      notNull: {
        msg: `Address must be filled`
      },
      notEmpty: {
        msg: `Address must not be empty`
      }
    }},
    
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};