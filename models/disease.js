'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Disease.belongsTo(models.User)
      Disease.belongsTo(models.Symptom)
    }
  }
  Disease.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    level: DataTypes.INTEGER,
    SymptomId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Disease',
  });
  return Disease;
};