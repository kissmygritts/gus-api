const sql = require('../sql').activities
// const cs = {}

class ActivitiesRepository {
  constructor (db, pgp) {
    this.db = db
    this.pgp = pgp
    // createColumnsets(pgp)
  }

  all (where) {
    return this.db.many(sql.all, where)
  }

  findById (args) {
    return this.db.oneOrNone(sql.findById, args)
  }

  getActivities (args) {
    return this.db.many(sql.getActivity, args)
  }

  getActivityBatch (args) {
    return this.db.many(sql.getActivityBatch, { id: args })
  }
}

module.exports = ActivitiesRepository
