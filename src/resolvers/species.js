const db = require('../../db')

module.exports = {
  Query: {
    species: () => db.species.all()
  }
}
