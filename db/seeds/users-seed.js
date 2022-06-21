const { User } = require('../../models');

const userData = [
    {
      user_name: 'Admin',
      password: Buffer.from('nimda').toString('base64')
    }
  ];
  
  const seedUsers = () => User.bulkCreate(userData);
  
  module.exports = seedUsers;
  
