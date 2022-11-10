'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasMany(models.Credit)
    }

    static sortPrice(){
      let options = {
        order : [['itemPrice' , 'DESC']]
      } 

      return Item.findAll(options)
    }

  }
  Item.init({
    item: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {
          msg: `Item must be filled`
        },
        notEmpty: {
          msg: `Item must not be empty`
        }
      }
    },
    itemPrice: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notNull: {
          msg: `Item Price must not be null`
        },
        notEmpty: {
          msg: `Item Price must not be empty`
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};