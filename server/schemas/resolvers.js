const { User } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
        const newUser = await User.create(args);
        return newUser;
    }
  }
};
