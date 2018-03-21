const DataLoader = require('dataloader')
const db = require('../db')

const activityLoader = new DataLoader(keys => {
  return db.activities
    .getActivityBatch(keys)
    .then(data => keys.map(k => data.filter(o => o.effort_id === k)))
})

const effortLoader = new DataLoader(keys => {
  return db.efforts.getEffortBatch(keys)
})

module.exports = {
  activityLoader,
  effortLoader
}
