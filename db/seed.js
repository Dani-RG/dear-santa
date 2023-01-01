const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Present = require('../models/Present');
const MONGO_URL = 'mongodb://localhost:27017/dear-santa';
const presents = require('./data');

mongoose.connect(MONGO_URL)
    .then(response => console.log(`CONNECTED TO THE DATABASE ${response.connection.name}`))
    .then(() => {
        return Present.create(presents)
    })
    .then(createdPresents => console.log(`Inserted ${createdPresents.length} presents in the database`))
    .then(() => mongoose.connection.close())
    .catch(err => console.log(err))