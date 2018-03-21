const DataLoader = require('dataloader')
const db = require('../db')

const effortLoader = new DataLoader(keys => {
  console.log(keys)
  return db.efforts.getEffortBatch(keys)
})

module.exports = {
  Query: {
    activities: () => db.activities.all(),
    activity: (_, args) => db.activities.findById(args)
  },

  Activity: {
    effort: (activity) => effortLoader.load(activity.effort_id)
  }
}
