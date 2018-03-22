const { predicate } = require('../../utils')
const db = require('../../db')

module.exports = {
  Query: {
    species: (root, args, context, info) => {
      let { limit, offset, ...filters } = args

      limit = !limit ? '' : ` LIMIT ${limit} `
      offset = !offset ? '' : ` OFFSET ${offset} `

      return Object.keys(filters).length === 0
        ? db.many(db.species.select() + limit + offset)
        : db.many(db.species.select() + ' WHERE ' + predicate(filters) + limit + offset)
    }
  }
}
