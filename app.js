const sequelize = require("./models");
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4500;

app.use(express.json());
app.use(cors());

// const tasksRouter = require('./routers/tasksRouter');
// app.use('/tasks', tasksRouter);

// const tagsRouter = require('./routers/tagsRouter');
// app.use('/tags', tagsRouter);

// const usersRouter = require('./routers/usersRouter');
// app.use('/users', usersRouter);

console.log(`Checking database connection...`);

sequelize.authenticate()
.then(() => {
    console.log('Database connection OK!');
    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`)
    })

})
.catch(err => {
    console.log(err);
});