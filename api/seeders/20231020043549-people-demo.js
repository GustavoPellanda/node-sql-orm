'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = [
      {
        name: 'Alice Johnson',
        active: true,
        email: 'alice@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob Smith',
        active: true,
        email: 'bob@example.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Charlie Brown',
        active: false,
        email: 'charlie@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'David Williams',
        active: true,
        email: 'david@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Emma Davis',
        active: false,
        email: 'emma@example.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Frank Wilson',
        active: true,
        email: 'frank@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Grace Turner',
        active: true,
        email: 'grace@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hannah Lee',
        active: true,
        email: 'hannah@example.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Isaac Harris',
        active: true,
        email: 'isaac@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jack Hall',
        active: true,
        email: 'jack@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kate Mitchell',
        active: false,
        email: 'kate@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Liam Clark',
        active: true,
        email: 'liam@example.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mia Turner',
        active: false,
        email: 'mia@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Noah Brown',
        active: true,
        email: 'noah@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Olivia Scott',
        active: true,
        email: 'olivia@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Peter White',
        active: false,
        email: 'peter@example.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Quinn Carter',
        active: true,
        email: 'quinn@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rachel Evans',
        active: true,
        email: 'rachel@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Samuel Adams',
        active: true,
        email: 'samuel@example.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Taylor Hall',
        active: true,
        email: 'taylor@example.com',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert('People', seedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  },
};