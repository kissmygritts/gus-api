const sql = require('../sql').efforts
// const cs = {}

class EffortsRepository {
  constructor (db, pgp) {
    this.db = db
    this.pgp = pgp
    // createColumnsets(pgp)
  }

  all () {
    return this.db.many(sql.all)
  }
}

module.exports = EffortsRepository
