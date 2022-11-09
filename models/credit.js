'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Credit.belongsTo(models.User)
    }
  }
  Credit.init({
    item: {
      type: DataTypes.STRING,
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
      validate: {
        notNull: {
          msg: `Item Price must not be null`
        },
        notEmpty: {
          msg: `Item Price must not be empty`
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: `Duration must not be null`
        },
        notEmpty: {
          msg: `Duration must not be empty`
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    imgUrl: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Credit',
  });
  return Credit;
};