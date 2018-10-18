require('dotenv').config()

const { prisma } = require('./generated/prisma')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    listItems(parent, args, context, info) {
      return context.prisma.listItems()
    }
  },
  Mutation: {
    createListItem(parent, args, context, info) {
      return context.prisma.createListItem({ title: args.title })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: { 
    prisma
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))