const mongoose = require('mongoose');

// *Configurar la conexión con MongoDB
mongoose.set("strictQuery", true);
mongoose.connect(
	"mongodb://localhost:27017/personaDB",
	{useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => console.log("Conexión con la DB establecida"))
	.catch(() => console.log("No se pudo establecer conexión con la DB"))
