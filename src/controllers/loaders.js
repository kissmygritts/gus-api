const DataLoader = require('dataloader')
const db = require('../../db')

const activityLoader = new DataLoader(keys => {
  const where = db.activities.pgp.as.format(
    ' where effort_id in ($/keys:csv/)',
    { keys }
  )

  return db.activities.all(where)
    .then(data => keys.map(k => data.filter(o => o.effort_id === k)))
})

const effortLoader = new DataLoader(keys => {
  return db.efforts.getEffortBatch(keys)
})

module.exports = {
  activityLoader,
  effortLoader
}
