'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = [
      {
        street: '123 Main Street',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        personId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: '456 Elm Avenue',
        city: 'Los Angeles',
        state: 'CA',
        postalCode: '90001',
        personId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: '789 Oak Boulevard',
        city: 'Chicago',
        state: 'IL',
        postalCode: '60601',
        personId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: '321 Pine Street',
        city: 'San Francisco',
        state: 'CA',
        postalCode: '94101',
        personId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: '555 Cedar Avenue',
        city: 'Miami',
        state: 'FL',
        postalCode: '33101',
        personId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: '987 Birch Road',
        city: 'Houston',
        state: 'TX',
        postalCode: '77001',
        personId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: '222 Spruce Lane',
        city: 'Boston',
        state: 'MA',
        postalCode: '02101',
        personId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: '777 Maple Drive',
        city: 'Seattle',
        state: 'WA',
        postalCode: '98101',
        personId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: '444 Oak Avenue',
        city: 'Dallas',
        state: 'TX',
        postalCode: '75201',
        personId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        street: '111 Elm Street',
        city: 'Phoenix',
        state: 'AZ',
        postalCode: '85001',
        personId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert('Addresses', seedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};
