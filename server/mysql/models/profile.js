const Sequelize = require('sequelize');

module.exports = class Profile extends Sequelize.Model {
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
      modelName: 'Profile',
      tableName: 'profiles',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Profile.belongsTo(db.User);

  }
};