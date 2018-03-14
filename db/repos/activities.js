const sql = require('../sql').activities
// const cs = {}

class ActivitiesRepository {
  constructor (db, pgp) {
    this.db = db
    this.pgp = pgp
    // createColumnsets(pgp)
  }

  all () {
    return this.db.many(sql.all)
  }
}

module.exports = ActivitiesRepository
