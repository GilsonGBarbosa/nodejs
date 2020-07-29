//Conectando o Mongoose com o Mongo DB

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db', {
    useMongoClient: true
}).then(() => {
    console.log('Conectado com sucesso')
}).catch((err) => {
    console.log('Houve um erro', err)
})