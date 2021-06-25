const {DataTypes} = require ('sequelize');
module.exports = (sequelize) => sequelize.define('Quiz', {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'quiz',
    underscored: true
});