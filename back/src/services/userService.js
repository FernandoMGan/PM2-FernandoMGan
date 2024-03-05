const User = require('../models/User.js');

module.exports = {
    getUsers: async () => {
        const users = await User.find();
        return users;
    },
    createUser: async (name, email) => { },
};
