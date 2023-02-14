const mongoose = require("mongoose");
const url_db = "mongodb://localhost:27017/author-manager";

// * Configuración de la conexión de la db
mongoose.set("strictQuery", true);
mongoose.connect(
	url_db,
	{ useNewUrlParser: true, useUnifiedTopology: true }
)
	.then(() => console.log("Conexión a la DB exitosa"))
	.catch(() => console.error("Fallo la conexión a la DB"));

