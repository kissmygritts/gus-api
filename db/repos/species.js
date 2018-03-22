const sql = require('../sql').species

const fields = [
  '?id',
  'common_name',
  'species_name',
  'alpha_code',
  'genus',
  'species',
  'gbif_key',
  't_phylum',
  't_class',
  't_order',
  't_family',
  'grouping',
  'ndow_code',
  'created_at',
  'updated_at'
]

const table = 'species'

// const all = () => this.db.many(sql.all)

module.exports = {
  fields,
  table,
  all: sql.all
}

// class SpeciesRepository {
//   constructor (db, pgp) {
//     this.db = db
//     this.pgp = pgp
//     // createColumnsets(pgp)
//   }

//   all () {
//     return this.db.many(sql.all)
//   }
// }

// module.exports = SpeciesRepository
