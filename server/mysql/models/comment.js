const Sequelize = require("sequelize");


module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      // id가 기본적으로 들어있다.
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      // UserId: 1
      // PostId: 3
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: "Hashtag",
      tableName: "hashtags",
      paranoid: false,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    });
  }
  static associate(db) {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  }
};
