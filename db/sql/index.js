const QueryFile = require('pg-promise').QueryFile
const path = require('path')

module.exports = {
  activities: {
    all: sql('activities/all.sql'),
    findById: sql('activities/findById.sql'),
    getActivity: sql('activities/getActivity.sql'),
    getActivityBatch: sql('activities/getActivityBatch.sql')
  },
  efforts: {
    all: sql('efforts/all.sql'),
    findById: sql('efforts/findById.sql'),
    getEfforts: sql('efforts/getEfforts.sql'),
    getEffortBatch: sql('efforts/getEffortBatch.sql')
  },
  events: {
    all: sql('events/all.sql')
  },
  species: {
    all: sql('species/all.sql')
  }
}

function sql (file) {
  const fullPath = path.join(__dirname, file)
  const options = { minify: true }
  const qf = new QueryFile(fullPath, options)

  if (qf.error) {
    console.log(qf.error)
  }

  return qf
}
