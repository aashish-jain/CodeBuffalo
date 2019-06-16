const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    activity: Activity
  }



  type Activity {
    id: ID!
    activity: String,
    accessibility: Float
    type: String
    participants: Int
    price: Float
    link: String
  }
`;

module.exports = typeDefs;
