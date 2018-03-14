const promise = require('bluebird')
const repos = require('./repos')
const initOptions = {
  promiseLib: promise,
  extend (obj, dc) {
    obj.species = new repos.Species(obj, pgp)
    obj.activities = new repos.Activities(obj, pgp)
    obj.efforts = new repos.Efforts(obj, pgp)
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

module.exports = db
