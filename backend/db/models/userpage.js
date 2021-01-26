'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPage = sequelize.define('UserPage', {
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    article_id: DataTypes.INTEGER
  }, {});
  UserPage.associate = function(models) {
    UserPage.belongsTo(models.User, { foreignKey: 'user_id' })
  };
  return UserPage;
};
