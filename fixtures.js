const sequelize = require("./models");
const faker = require('faker');
faker.locale = 'fr';
console.log(`Checking database connection...`);

const generateCategory = () => {
    for (let i = 1; i<= 5; i++) {
        sequelize.models.Category.create({
            title: faker.random.words(1),
        })
    }
}

const randomNumberForCategoryId = (min, max) => {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateQuiz = () => {
    for (let i = 1; i<= 10; i++) {
        sequelize.models.Quiz.create({
            title: faker.random.words(5),
            CategoryId: randomNumberForCategoryId(1, 5)
        })
    }
}

sequelize.authenticate()
.then(() => {
    console.log('Database connection OK!');
    sequelize.sync({ force: true })
    .then(() => {
        // insertion de données 
        // pour avoir un modèle on va passer par l'instance de Sequelize
        generateCategory();
        generateQuiz();
        
    })
})
.catch(err => {
    console.log(err);
});