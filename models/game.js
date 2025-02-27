'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Game.init({
    gameName: DataTypes.STRING,
    designer: DataTypes.STRING,
    genres: DataTypes.STRING,
    playtime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
    tableName: 'games'
  });
  return Game;
};