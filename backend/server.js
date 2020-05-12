const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type FixedCost {
    id: ID!
    title: String
    cost: Int
  }

  type Query {
    getFixedCost: [FixedCost]
  }

  input FixedCostInput {
    title: String
    cost: Int
  }

  type Mutation {
    addFixedCost(input: FixedCostInput): FixedCost
  }
`;

const FC_DATA = [
  { id: '1', title: 'rent', cost: 1500 },
  { id: '2', title: 'phone', cost: 100 },
];

const resolvers = {
  Query: {
    getFixedCost: () => FC_DATA,
  },
  // How to auto-generate ids
  Mutation: {
    addFixedCost: (_, { input }) => {
      let newCost = { id: '3', title: input.title, cost: input.cost };
      FC_DATA.push(newCost);
      return newCost;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
