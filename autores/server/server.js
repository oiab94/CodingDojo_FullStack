const express = require("express");
const cors = require("cors");

// * Iniciamos express
const app = express();
const port = 8000;

// * Iniciamos el servidor
app.listen(port, 
	() => console.log(`El servidor se escucha en el puerto ${port}`)
);

// * Iniciamos nuestro MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// * Conectamos a la BD
require("./config/mongoose.config");

// * Conectamos las rutas de la API
require("./routes/authors.route")(app);