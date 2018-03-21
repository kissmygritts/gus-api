const { GraphQLDateTime, GraphQLTime, GraphQLDate } = require('graphql-iso-date')

module.exports = {
  DateTime: GraphQLDateTime,
  Date: GraphQLDate,
  Time: GraphQLTime
}
