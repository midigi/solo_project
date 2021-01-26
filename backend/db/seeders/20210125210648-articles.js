'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserArticles', [
    { user_id: 2, title: "Best Analytics", blurb: "Best of the best.", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', tags: `Math`, createdAt: new Date(), updatedAt: new Date() },
    { user_id: 1, title: "How to Analyze", blurb: "Thinking hard.", content: 'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', tags: `Education`, createdAt: new Date(), updatedAt: new Date() },
    { user_id: 3, title: "Analyze x10", blurb: "Do you even think bro?", content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', tags: `Education`, createdAt: new Date(), updatedAt: new Date() },
    { user_id: 2, title: "What is Analytics", blurb: "What is a number?", content: 'Tempor incididunt ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Cillum dolore eu fugiat nulla pariatur. ', tags: `Report`, createdAt: new Date(), updatedAt: new Date() }
  ],{});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserArticles', null, {});
  }
};
