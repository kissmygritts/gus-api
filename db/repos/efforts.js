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

  findById (args) {
    return this.db.oneOrNone(sql.findById, args)
  }

  getEfforts () {
    return this.db.many(sql.getEfforts)
  }
}

module.exports = EffortsRepository
