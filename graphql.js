const { GraphQLServer } = require('graphql-yoga')
const DataLoader = require('dataloader')
// const lodash = require('lodash')
const db = require('./db')

const activityLoader = new DataLoader(keys => {
  return db.activities.getActivityBatch(keys)
    .then(data => keys.map(k => data.filter(o => o.effort_id === k)))
})

const resolvers = {
  Query: {
    activities: () => db.activities.all(),
    activityById: (_, args) => db.activities.findById(args),
    description: () => `This is the API for a simple blogging application`,
    efforts: () => db.efforts.all(),
    effortsById: (_, args) => db.efforts.findById(args),
    species: () => db.species.all()
  },
  Mutation: {
    createEffort: (parent, args) => db.efforts.createEffort(args),
    updateEffort: (parent, args) => db.efforts.updateEffort(args),
    deleteEffort: (parent, args) => db.efforts.deleteEffort(args)
  },
  Effort: {
    activities: (effort) => activityLoader.load(effort.id)
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers
})

// server.start(() => console.log(`The server is running on http://localhost:4000`))

module.exports = server
