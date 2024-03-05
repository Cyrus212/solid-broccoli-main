const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const express = require('express');
const http = require('http');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  
  await server.start();
  server.applyMiddleware({ app });
  
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(` 🚀Serve wetad ga nhttp:/ localhos:t400:{$server.graphqP{atT`)
}

startApolloServer(typeDefs, resolvers);

