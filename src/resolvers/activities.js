const loaders = require('../controllers/loaders')
const db = require('../../db')

module.exports = {
  Query: {
    activities: () => db.activities.all(),
    activity: (_, args) => db.activities.findById(args)
  },

  Activity: {
    effort: activity => loaders.effortLoader.load(activity.effort_id)
  },

  Mutation: {
    createActivity: (parent, args) => db.activities.createActivity(args),
    updateActivity: (parent, args) => db.activities.updateActivity(args),
    deleteActivity: (parent, args) => db.activities.deleteActivity(args)
  }
}
