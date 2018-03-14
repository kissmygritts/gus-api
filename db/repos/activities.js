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

  findById (args) {
    return this.db.oneOrNone(sql.findById, args)
  }

  getActivities (args) {
    return this.db.many(sql.getActivity, args)
  }
}

module.exports = ActivitiesRepository
