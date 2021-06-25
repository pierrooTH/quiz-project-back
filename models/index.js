const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(
    'mysql://quiz_project_user:123@localhost/quiz_project_back'
)

const Quiz = require('./Quiz')(sequelize);
const Category = require('./Category')(sequelize)
const Question = require('./Question')(sequelize)
const Response = require('./Response')(sequelize)

Category.hasMany(Quiz);
Quiz.belongsTo(Category);

Quiz.hasMany(Question);
Question.belongsTo(Quiz);

Question.hasOne(Response);


module.exports = sequelize;