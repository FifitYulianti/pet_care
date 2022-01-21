'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      id: 1,
      name: 'Grooming Standart',
      description: 'Grooming bersih dengan shampo yang harum',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: 'Grooming Kutu',
      description: 'Grooming bersih dengan shampo yang khusus untuk kutu serta obat kutu',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: 'Grooming Jamur',
      description: 'Grooming bersih dengan shampo yang khusus untuk jamur serta obat jamur',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      name: 'Grooming Complete',
      description: 'Kombinasi dari grooming kutu dan jamur untuk hasil yang lebh maksimal',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
