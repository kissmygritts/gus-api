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
      repo.pgp.as.format('SELECT $/columns:raw/ FROM $/table/ LIMIT 10', {
        columns: repo.cs.names,
        table: repo.cs.table
      }),
    insert: data => repo.pgp.helpers.insert(data, repo.cs),
    update: data => repo.pgp.helpers.update(data, repo.cs),
    values: data => repo.pgp.helpers.values(data, repo.cs),
    sets: data => repo.pgp.helpers.sets(data, repo.cs)
  }
}

module.exports = {
  repoFactory,
  repoAddUtils
}
