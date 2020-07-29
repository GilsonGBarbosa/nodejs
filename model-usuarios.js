
//Definindo Model - Usuários com Mongoose

//definindo model
const userSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})
//collection
mongoose.model('usuarios', userSchema)

const gilson = mongoose.model('usuarios')

new gilson({
    nome: 'Gilson',
    sobrenome: 'Barbosa',
    email: 'gilson@gmail.com',
    idade: 32,
    pais: 'Brasil'
}).save().then(() => {
    console.log('Usuario criado com sucesso')
}).catch((err) => {
    console.log('Ouve um erro ao criar o usuario' , err)
})