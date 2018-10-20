require('dotenv').config()

const { prisma } = require('./generated/prisma')
const { GraphQLServer } = require('graphql-yoga')
const Filter = require('bad-words')

const filter = new Filter()

const resolvers = {
  Query: {
    listItems(parent, args, context, info) {
      return context.prisma.listItems({ 
        first: args.first,
        skip: args.skip,
        orderBy: 'createdAt_DESC' 
      })
    },
    listItemsConnection(parent, args, context, info) {
      return context.prisma.listItemsConnection().aggregate()
    } 
  },
  Mutation: {
    createListItem(parent, args, context, info) {
      return context.prisma.createListItem({ title: filter.clean(args.title) })
    },
    deleteListItem  (parent, args, context, info) {
      return context.prisma.deleteListItem({ id: args.id })
    }
  }
}

console.log(process.env.FRONTEND_URL)

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: { 
    prisma
  },
})
server.start({}, result => console.log('Server is running on ' + result.port))