const express = require('express'); //Importa el paquete
const bodyParser = require('body-parser');
const membersRouter = require('./routes/members');
const costsRoute = require('./routes/costs');

const app = express();
app.use(bodyParser());

app.use(membersRouter);
app.use(costsRoute);

app.listen(9000, () => {
    console.log("Escuchando en el puerto 9000");
});