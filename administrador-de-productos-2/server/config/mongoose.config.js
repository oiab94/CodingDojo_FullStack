const mongoose = require('mongoose');
const dbURL =	"mongodb://localhost:27017/product-manager";

// *Configuración de la conexión a la DB
mongoose.set("strictQuery", true);
mongoose.connect(
	dbURL,
	{useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => console.log("Conexion a la DB exitosa"))
	.catch(() => console.log("Conexion a la DB fallida"))