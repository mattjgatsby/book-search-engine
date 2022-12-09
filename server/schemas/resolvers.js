const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        getAllUsers: async () => {
            return User.find();
        },
        me: async (parent, args, context) => {
            const foundUser = await User.findById(context.user._id);

            if (!foundUser) {
                throw new AuthenticationError('Cannot find a user with this id!');
            }

            return foundUser;
        }
    },
  Mutation: {
    createUser: async (parent, args) => {
        const newUser = await User.create(args);
        return newUser;
    }
  }
};
