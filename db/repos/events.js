const sql = require('../sql').events

class EventsRepository {
  constructor (db, pgp) {
    this.db = db
    this.pgp = pgp
  }

  all () {
    return this.db.many(sql.all)
  }
}

module.exports = EventsRepository
