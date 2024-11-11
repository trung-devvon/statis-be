"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("companies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      companyName: {
        type: Sequelize.STRING,
      },
      taxCode: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      managementUnit: {
        type: Sequelize.STRING,
      },
      companyType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      name_normalized: {
        type: Sequelize.STRING
      },
      address_normalized: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addIndex('companies', ['name_normalized']);
    await queryInterface.addIndex('companies', ['address_normalized']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("companies");
  },
};
