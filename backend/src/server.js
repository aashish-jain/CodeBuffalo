const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("../src/schema");
const { GraphQLServer } = require("graphql-yoga");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// 1
const typeDefs = `
  type Query {
    info: String!
  }
  `;

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers
});


const PORT = process.env.PORT || 5000;
server.start(() => console.log(`Server is running`));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
