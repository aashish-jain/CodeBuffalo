const axios = require('axios');

const { GraphQLObjectType,
     GraphQLInt, 
     GraphQLString, 
     GraphQLFloat,
    GraphQLList, 
     GraphQLSchema } = require('graphql');

const BoredType = new GraphQLObjectType({
    name: 'Bored',
    fields: () => ({
        activity: { type: GraphQLString },
        accessibility: { type: GraphQLFloat },
        type: { type: GraphQLString },
        participants: { type: GraphQLInt },
        price:{ type: GraphQLFloat },
        link: { type: GraphQLString },
        key: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name : 'RootQuertType',
    fields : {
        activity: {
         type: BoredType,
            resolve(parent, args) {
                return axios
                .get('http://www.boredapi.com/api/activity/')
                 .then(res => res.data);
            }
        
        } 

    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
