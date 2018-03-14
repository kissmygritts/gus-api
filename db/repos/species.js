const sql = require('../sql').species
// const cs = {}

class SpeciesRepository {
  constructor (db, pgp) {
    this.db = db
    this.pgp = pgp
    // createColumnsets(pgp)
  }

  all () {
    return this.db.many(sql.all)
  }
}

module.exports = SpeciesRepository
