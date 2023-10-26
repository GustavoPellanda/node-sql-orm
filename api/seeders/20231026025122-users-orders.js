'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = [
      {
        orderDate: new Date('2023-03-01'),
        totalAmount: 100.50,
        personId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: new Date('2023-03-02'),
        totalAmount: 75.20,
        personId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: new Date('2023-03-03'),
        totalAmount: 125.75,
        personId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: new Date('2023-03-04'),
        totalAmount: 50.90,
        personId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: new Date('2023-03-05'),
        totalAmount: 80.60,
        personId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: new Date('2023-03-06'),
        totalAmount: 60.75,
        personId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: new Date('2023-03-07'),
        totalAmount: 95.30,
        personId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: new Date('2023-03-08'),
        totalAmount: 110.40,
        personId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: new Date('2023-03-09'),
        totalAmount: 70.20,
        personId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: new Date('2023-03-10'),
        totalAmount: 105.75,
        personId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert('Orders', seedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
