const { GraphQLServer } = require('graphql-yoga')
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas')
const path = require('path')

const typesArray = fileLoader(path.join(__dirname, './schema'))
const typeDefs = mergeTypes(typesArray, { all: true })

const resolversArray = fileLoader(path.join(__dirname, './resolvers'))
const resolvers = mergeResolvers(resolversArray)

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log(`The server is running on http://localhost:4000`))
