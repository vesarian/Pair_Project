'use strict';
const {
  Model ,
  Op
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
      Credit.belongsTo(models.Item)
      Credit.belongsTo(models.Profile)
    }

    get toMonth(){
      return this.tenor +  `month`
    }
  }
  
  Credit.init({
    tenor: DataTypes.INTEGER,
    ProfileId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, 
   {
    sequelize,
    modelName: 'Credit',
    hooks:{
      beforeCreate:(value) => {
        if(value.tenor === 3){
          value.amount = value.amount + (value.amount*0.05)
        }else if(value.tenor === 6){
          value.amount = value.amount + (value.amount*0.1)
        }else if(value.tenor === 12){
          value.amount = value.amount + (value.amount*0.15)
        }
      }
    }
  });
  return Credit;
};