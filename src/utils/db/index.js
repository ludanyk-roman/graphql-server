const Sequelize = require('sequelize');
const models = require('../../models');

const init = ({ database, username, userpass, host, port, dialect, logging }) => 
  new Sequelize(database, username, userpass, {
    host,
    port,
    dialect,
    logging,
  });

module.exports = (options) => {
  const sequelize = init(options);
  const city = sequelize.define('city', models.city);
  const place = sequelize.define('places', models.place);
  const comments = sequelize.define('comments', models.comment);

  city.hasMany(place, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  place.belongsTo(city);

  place.hasMany(comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });
  comments.belongsTo(place);

  sequelize.sync();

  return { city, place, comments, sequelize };
};
