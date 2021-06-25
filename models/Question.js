const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => sequelize.define('Question', {
    title: {
        type: DataTypes.TEXT(),
        allowNull: false
    }
}, {
    tableName: 'question',
    underscored: true
});