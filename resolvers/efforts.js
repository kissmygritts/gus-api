const { activityLoader } = require('../controllers/loaders')
const db = require('../db')

module.exports = {
  Query: {
    efforts: () => db.efforts.all(),
    effort: (_, args) => db.efforts.findById(args)
  },

  Mutation: {
    createEffort: (parent, args) => db.efforts.createEffort(args),
    updateEffort: (parent, args) => db.efforts.updateEffort(args),
    deleteEffort: (parent, args) => db.efforts.deleteEffort(args)
  },

  Effort: {
    activities: effort => activityLoader.load(effort.id)
  }
}
