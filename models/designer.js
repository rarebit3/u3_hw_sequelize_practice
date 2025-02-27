'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Designer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Designer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    games: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Designer',
    tableName: 'desingers'
  });
  return Designer;
};