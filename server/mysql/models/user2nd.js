const Sequelize = require('sequelize');

module.exports = class User2nd extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            image: {
                type: Sequelize.STRING(200),
                allowNull: true,
                defaultValue: 'uploads\img\coffee.jpg'
            },
            couple_code: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            message: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User2nd',
            tableName: 'user2nds',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.User2nd.hasOne(db.User);
    }
};