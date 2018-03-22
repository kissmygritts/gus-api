const pgp = require('pg-promise')()

const repoFactory = function ({ rep, pgp, fields, tbl }) {
  const cs = new pgp.helpers.ColumnSet(fields, pgp.helpers.TableName(tbl))

  return {
    rep,
    pgp,
    cs
  }
}

const repoAddUtils = function (repo) {
  return {
    ...repo,
    select: () =>
      repo.pgp.as.format('SELECT $/columns:raw/ FROM $/table/', {
        columns: repo.cs.names,
        table: repo.cs.table
      }),
    insert: data => repo.pgp.helpers.insert(data, repo.cs),
    update: data => repo.pgp.helpers.update(data, repo.cs),
    values: data => repo.pgp.helpers.values(data, repo.cs),
    sets: data => repo.pgp.helpers.sets(data, repo.cs)
  }
}

const predicate = function (args) {
  return Object.keys(args)
    .map(m => pgp.as.format('$/this:name/ = $/this:csv/', { [m]: args[m] }))
    .reduce((acc, curr) => acc + ' AND ' + curr)
}

module.exports = {
  repoFactory,
  repoAddUtils,
  predicate
}
