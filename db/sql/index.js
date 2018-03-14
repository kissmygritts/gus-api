const QueryFile = require('pg-promise').QueryFile
const path = require('path')

module.exports = {
  species: {
    all: sql('species/all.sql')
  },
  activities: {
    all: sql('activities/all.sql')
  },
  efforts: {
    all: sql('efforts/all.sql')
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
