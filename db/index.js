const promise = require('bluebird')
const repos = require('./repos')
const { repoFactory, repoAddUtils } = require('../utils')
const initOptions = {
  promiseLib: promise,
  extend (obj, dc) {
    // obj.species = new repos.Species(obj, pgp)
    obj.species = repoAddUtils(repoFactory({
      rep: obj,
      pgp,
      fields: repos.Species.fields,
      tbl: repos.Species.table
    }))
    obj.activities = new repos.Activities(obj, pgp)
    obj.efforts = new repos.Efforts(obj, pgp)
    obj.events = new repos.Events(obj, pgp)
  }
}

const config = {
  host: 'localhost',
  port: 5432,
  database: 'gus',
  user: 'mitchellgritts'
}

const pgp = require('pg-promise')(initOptions)
const db = pgp(config)
const diagnostics = require('./diagnostics')
diagnostics.init(initOptions)

db.species.all = () => db.many(repos.Species.all)

module.exports = db
