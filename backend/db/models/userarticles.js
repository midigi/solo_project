'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserArticles = sequelize.define('UserArticles', {
    // id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    blurb: DataTypes.STRING,
    content: DataTypes.STRING,
    tags: DataTypes.STRING,
  }, {});
  UserArticles.associate = function(models) {
    const articleUserMap = {
      foreignKey: 'article_id',
      through: 'ArticleComment',
      otherKey: 'user_id'
    }
    UserArticles.belongsToMany(models.User, articleUserMap);
    UserArticles.hasMany(models.ArticleComments, {foreignKey: 'article_id'});
  };
  return UserArticles;
};
