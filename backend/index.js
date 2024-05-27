const express = require('express');
const bodyParser = require('body-parser');
const routeCalculator = require('./routeCalculator');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routeCalculator);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
