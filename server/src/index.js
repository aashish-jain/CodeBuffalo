const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const BoredAPI = require("./datasources/bored");
const resolvers = require('./resolvers');

const dataSources =  () =>  ({
  BoredAPI: new BoredAPI()
});

const server = new ApolloServer({
  typeDefs,
  dataSources,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
