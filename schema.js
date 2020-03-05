const { gql } = require('apollo-server-lambda');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type LitcalDate {
        date: String!
        litcal_date: String!
        color: String!
        saint: String!
    }

    type Query {
        litcalDate(date: String!): LitcalDate
    }
`;

module.exports = typeDefs;