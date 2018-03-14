const app = require('./rest')
const server = require('./graphql')

server.start(() => console.log(`The server is running on http://localhost:4000`))
app.listen(3000, () => {
  console.log('API is listening on port 3000')
})
