const {DataTypes} = require ('sequelize');
module.exports = (sequelize) => sequelize.define('Response', {
    content: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    isCorrect: {
        type: DataTypes.BOOLEAN(),
        allowNull: false
    }
}, {
    tableName: 'response',
    underscored: true
});