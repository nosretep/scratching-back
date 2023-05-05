'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('product_parts', {
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: 'products', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      part_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: 'parts', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('product_parts');
  }
};
