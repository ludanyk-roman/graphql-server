const Sequelize = require('sequelize');

module.exports = city => ({
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
  imageUrl: {
    type: Sequelize.STRING,
  },
  cityId: {
    type: Sequelize.BIGINT,
    references: {
      model: city,
      key: 'id',
    },
  },
});
