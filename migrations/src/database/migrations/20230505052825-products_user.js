'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'products', // name of Source model
      'user_id', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        // defaultValue: 0,
        references: {
          model: 'users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'products', // name of Source model
      'user_id' // key we want to remove
    )
  }
};
