const {DataTypes} = require ('sequelize');
module.exports = (sequelize) => sequelize.define('Response', {
    title: {
        type: DataTypes.BOOLEAN(),
        allowNull: false
    }
}, {
    tableName: 'response',
    underscored: true
});