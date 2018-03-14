const { GraphQLServer } = require('graphql-yoga')
const db = require('./db')

const resolvers = {
  Query: {
    activities: () => db.activities.all(),
    activityById: (_, args) => db.activities.findById(args),
    description: () => `This is the API for a simple blogging application`,
    efforts: () => db.efforts.all(),
    effortsById: (_, args) => db.efforts.findById(args),
    species: () => db.species.all()
  },
  Effort: {
    activities: (effort) => db.activities.all()
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers
})

// server.start(() => console.log(`The server is running on http://localhost:4000`))

module.exports = server
