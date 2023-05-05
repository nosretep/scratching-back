'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'manuals', // name of Source model
      'product_id', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: 'products', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'manuals', // name of Source model
      'product_id' // key we want to remove
    )
  }
};