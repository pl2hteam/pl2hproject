
const Sequelize = require("sequelize");

/* Image DB */
module.exports = class Image extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        src: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
      }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: "Image",
      tableName: "images",
      paranoid: false,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
    );
  }

  static associate(db) {
    db.Image.belongsTo(db.Post);
  }
};