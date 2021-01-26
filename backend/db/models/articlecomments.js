'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticleComments = sequelize.define('ArticleComments', {
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    article_id: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  ArticleComments.associate = function(models) {
    ArticleComments.belongsTo(models.User, {foreignKey: 'user_id'})
    ArticleComments.belongsTo(models.UserArticle, {foreignKey: 'article_id'})
  };
  return ArticleComments;
};
