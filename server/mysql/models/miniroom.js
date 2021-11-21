
const Sequelize = require("sequelize");

/* Miniroom DB */
module.exports = class Miniroom extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        miniroom: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        minimi: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        today: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: "Miniroom",
      tableName: "counter",
      paranoid: false,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
    );
  }

  static associate(db) {

  }
};