const {DataTypes} = require ('sequelize');
module.exports = (sequelize) => sequelize.define('Quiz', {
    title: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'quiz',
    underscored: true
});