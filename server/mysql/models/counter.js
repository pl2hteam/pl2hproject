
const Sequelize = require("sequelize");

/* Counter DB */
module.exports = class Counter extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.STRING(15),
          allowNull: false,
          unique: true,
        },
        totalCount: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        todayCount: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        date: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: "Counter",
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