const Sequelize = require('sequelize');

module.exports = {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: Sequelize.STRING,
  },
  userName: {
    type: Sequelize.STRING,
  },
};
