// const db = require('./db')
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.status(200).json({ msg: 'API is listening' })
// })

// app.get('/species', (req, res) => {
//   db.species.all()
//     .then(data => res.status(200).json({ msg: 'success', data }))
//     .catch(error => res.status(400).json({ error }))
// })

// app.get('/activities', (req, res) => {
//   db.activities.all()
//     .then(data => res.status(200).json({ msg: 'success', data }))
//     .catch(error => res.status(400).json({ error }))
// })

// app.get('/efforts', (req, res) => {
//   db.efforts.all()
//     .then(data => res.status(200).json({ msg: 'success', data }))
//     .catch(error => res.status(400).json({ error }))
// })

// app.listen(3000, () => {
//   console.log('API is listening on port 3000')
// })

// GRAPHQL THINGS
const db = require('./db')

const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    activities: () => db.activities.all(),
    description: () => `This is the API for a simple blogging application`,
    efforts: () => db.efforts.all(),
    species: () => db.species.all()
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers
})

server.start(() => console.log(`The server is running on http://localhost:4000`))
