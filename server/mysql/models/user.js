const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            email: {
                type: Sequelize.STRING(40),
                allowNull: true,
                unique: true,
            },
            name: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            image: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            address: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            gender: {   // boolean 으로 구분
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            role: {   // boolean 으로 구분
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: '1'
            },
            phone: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            birth: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            provider: {
                type: Sequelize.STRING(10),
                allowNull: false,
                defaultValue: 'local',
            },
            snsId: {
                type: Sequelize.STRING(30),
                allowNullL: true,
            },
            couple_code: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            message: {
                type: Sequelize.STRING(100),
                allowNull: true,
                defaultValue: 'Welcom PL2H World!'
            },

        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Comment, { through: "commentRecommends", as: "commentRecommenders" });
        db.User.belongsToMany(db.Post, { through: "Recommends", as: "recommenders" });
        //db.User.hasOne(db.User2nd, { foreignKey: 'UserIdOf2nd', sourceKey: 'id' });
        //db.User.belongsTo(db.User2nd, { foreignKey: 'UserIdOf2nd', targetKey: 'id' });
    }
};