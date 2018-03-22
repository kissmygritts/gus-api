const db = require('../../db')

module.exports = {
  Query: {
    species: (root, args, context, info) => {
      console.log(db.species.pgp.as.format(' where $/this:name/ = $/this:csv/', args))
      return db.many(db.species.select())
      // return db.species.all()
    }
  }
}
