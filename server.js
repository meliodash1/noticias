const express = require('express');
const bodyParser = require('body-parser');
const newsRoutes = require('./routes/newsRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/news', newsRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
