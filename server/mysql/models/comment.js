const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    });
  }
  static associate(db) {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsToMany(db.User, { through: "commentRecommends", as: "recommendComment" });
    db.Comment.belongsTo(db.Post);
    db.Comment.belongsToMany(db.Comment, { through: 'Reply', as: 'Responses', foreignKey: 'AnswerId' });
    db.Comment.belongsToMany(db.Comment, { through: 'Reply', as: 'Answers', foreignKey: 'ResponseId' });
  }
};
