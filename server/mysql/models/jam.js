const Sequelize = require("sequelize");

/* Hashtag DB */
module.exports = class Jam extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(15),
          allowNull: false,
          unique: true,
        }, img: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Jam",
        tableName: "jams",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Jam.hasMany(db.Image);
  }
};