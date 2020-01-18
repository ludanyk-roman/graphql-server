const Sequelize = require('sequelize');

module.exports = place => ({
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
  placeId: {
    type: Sequelize.BIGINT,
    references: {
      model: place,
      key: 'id',
    },
  },
});
