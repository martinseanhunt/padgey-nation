module.exports = {
        typeDefs: /* GraphQL */ `type AggregateListItem {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type ListItem {
  id: ID!
  title: String!
}

type ListItemConnection {
  pageInfo: PageInfo!
  edges: [ListItemEdge]!
  aggregate: AggregateListItem!
}

input ListItemCreateInput {
  title: String!
}

type ListItemEdge {
  node: ListItem!
  cursor: String!
}

enum ListItemOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ListItemPreviousValues {
  id: ID!
  title: String!
}

type ListItemSubscriptionPayload {
  mutation: MutationType!
  node: ListItem
  updatedFields: [String!]
  previousValues: ListItemPreviousValues
}

input ListItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ListItemWhereInput
  AND: [ListItemSubscriptionWhereInput!]
  OR: [ListItemSubscriptionWhereInput!]
  NOT: [ListItemSubscriptionWhereInput!]
}

input ListItemUpdateInput {
  title: String
}

input ListItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [ListItemWhereInput!]
  OR: [ListItemWhereInput!]
  NOT: [ListItemWhereInput!]
}

input ListItemWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createListItem(data: ListItemCreateInput!): ListItem!
  updateListItem(data: ListItemUpdateInput!, where: ListItemWhereUniqueInput!): ListItem
  updateManyListItems(data: ListItemUpdateInput!, where: ListItemWhereInput): BatchPayload!
  upsertListItem(where: ListItemWhereUniqueInput!, create: ListItemCreateInput!, update: ListItemUpdateInput!): ListItem!
  deleteListItem(where: ListItemWhereUniqueInput!): ListItem
  deleteManyListItems(where: ListItemWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  listItem(where: ListItemWhereUniqueInput!): ListItem
  listItems(where: ListItemWhereInput, orderBy: ListItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ListItem]!
  listItemsConnection(where: ListItemWhereInput, orderBy: ListItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ListItemConnection!
  node(id: ID!): Node
}

type Subscription {
  listItem(where: ListItemSubscriptionWhereInput): ListItemSubscriptionPayload
}
`
      }
    