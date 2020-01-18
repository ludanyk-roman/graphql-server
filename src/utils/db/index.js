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
  const place = sequelize.define('places', models.place(city));
  const comments = sequelize.define('comments', models.comment(place));
  sequelize.sync();

  return { city, place, comments, sequelize };
};
