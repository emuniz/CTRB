const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//Criando a aplicação, colocando-a para ouvir a porta 3333 e respondendo a msg em JSON 
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
