const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    getAllUsers: [User]
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): Auth
    saveBook(book: BookInput): User
    deleteBook(bookId: String!): User
}

`;

module.exports = typeDefs;
