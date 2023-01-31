const express = require("express");
const cors = require("cors");

// * Inicia express
const app = express();
const port = 3000;

// * Ponemos a la escucha el servidor
app.listen(port, () => console.log(`Se escucha en el puerto ${port}`));

// * Insertamos los MIDDLEWARE
app.use(cors());

// * Conexion a la DB
require("./server/config/mongoose.config")