'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ArticleComments', [
        { user_id: 1, article_id: 2, content: 'WHAT THE HECK. SO COOL!', createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, article_id: 2, content: 'Lameo.', createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, article_id: 2, content: 'That is not nice! This is really cool stuff.', createdAt: new Date(), updatedAt: new Date() }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ArticleComments', null, {});

  }
};
