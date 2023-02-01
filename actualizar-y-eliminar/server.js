const cors = require("cors");
const express = require("express");
const app = express();
const port = 8000;


// *Creación del MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.listen(
	port,
	() => console.log(`Se escucha en el puerto ${port}`)
)

// *Conexión con la DB
require("./server/config/mongoose.config");

// *Enrutamiento a la DB
require("./server/routes/person.route")(app);