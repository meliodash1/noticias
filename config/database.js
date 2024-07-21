const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://noticias:noticias@cluster0.nax4f0s.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
    console.log('Conectado ao MongoDB');
});


module.exports = mongoose;
