const { GraphQLServer } = require('graphql-yoga');
const config = require('config');

const initSequelize = require('./utils/db');
const resolvers = require('./resolvers');

const serverOptions = config.get('server-config');

const db = initSequelize(config.get('db'));

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { db },
});

server.start(serverOptions, () => console.log(`Started on port ${serverOptions.port}`));
