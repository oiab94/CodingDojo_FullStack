const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

// *Cors es nuestro MIDDLEWARE para conectar express
app.use(cors())

// *Ponemos a la escucha nuestro backend
app.listen(port, () => console.log(`Se escucha en el puerto ${port}`));

// *Enrutamiento a la ruta de consulta
const ruta = require("./server/routes/person.route");
ruta(app);
