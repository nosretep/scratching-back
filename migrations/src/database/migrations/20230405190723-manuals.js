'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('manuals', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      fulltext: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('manuals');
  }
};
