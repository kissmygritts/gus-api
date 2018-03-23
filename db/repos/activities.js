const sql = require('../sql').activities

class ActivitiesRepository {
  constructor (db, pgp) {
    this.db = db
    this.pgp = pgp
    this.cs = pgp.helpers.ColumnSet([
      'activity_name', 'activity_type', 'activity_start_date', 'activity_duration', 'activity_time_frame', 'activity_description'
    ], { table: { table: 'activities' } })
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
    return this.db.many(sql.getActivityBatch, args)
  }

  createActivity (args) {
    return this.db.one(this.pgp.helpers.insert(args, this.cs) + 'RETURNING *')
  }

  updateActivity (args) {
    console.log(args)
    const update = this.pgp.helpers.update(args, Object.keys(args), 'activities')
    console.log(update)
    return this.db.one(update + ` WHERE id = '${args.id}' RETURNING *`
    )
  }

  deleteActivity (args) {
    console.log(args)
    return this.db.one('DELETE FROM activities WHERE id = $/id/ RETURNING *', args)
  }
}

module.exports = ActivitiesRepository
