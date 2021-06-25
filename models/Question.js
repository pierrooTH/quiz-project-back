const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => sequelize.define('Question', {
    title: {
        type: DataTypes.STRING(180),
        allowNull: false
    }
}, {
    tableName: 'question',
    underscored: true
});