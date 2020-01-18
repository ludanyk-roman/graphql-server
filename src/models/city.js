const Sequelize = require('sequelize');

module.exports = {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  imageURL: {
    type: Sequelize.STRING,
  },
  population: {
    type: Sequelize.INTEGER,
  },
};
