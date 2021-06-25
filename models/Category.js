const {DataTypes} = require ('sequelize');
module.exports = (sequelize) => sequelize.define('Category', {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'category',
    underscored: true
});