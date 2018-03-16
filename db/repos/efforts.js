const sql = require('../sql').efforts

class EffortsRepository {
  constructor (db, pgp) {
    this.db = db
    this.pgp = pgp
    this.cs = pgp.helpers.ColumnSet([
      'effort_name', 'effort_primary_species', 'effort_status', 'effort_purpose', 'effort_agency'
    ], { table: { table: 'efforts' } })
  }

  all () {
    return this.db.many(sql.all)
  }

  findById (args) {
    return this.db.oneOrNone(sql.findById, args)
  }

  // purely for the REST portion of the API
  getEfforts () {
    return this.db.many(sql.getEfforts)
  }

  createEffort (args) {
    return this.db.one(this.pgp.helpers.insert(args, this.cs) + ' RETURNING *')
  }

  updateEffort (args) {
    return this.db.one(this.pgp.helpers.update(args, this.cs) + ` WHERE id = '${args.id}' RETURNING *`)
  }

  deleteEffort (args) {
    console.log(args)
    return this.db.one('DELETE FROM efforts WHERE id = $/id/ RETURNING *', args)
  }
}

module.exports = EffortsRepository
