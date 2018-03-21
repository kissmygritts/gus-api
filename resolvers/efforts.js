const DataLoader = require('dataloader')
const db = require('../db')

const activityLoader = new DataLoader(keys => {
  return db.activities.getActivityBatch(keys)
    .then(data => keys.map(k => data.filter(o => o.effort_id === k)))
})

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
    activities: (effort) => activityLoader.load(effort.id)
  }
}
