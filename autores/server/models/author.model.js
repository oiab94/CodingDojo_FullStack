const mongoose = require("mongoose");

// * Declaramos el modelo de nuestro esquema
var authorSchema = new mongoose.Schema({
	name: {
		type:String,
		required:[
			true,
			"Name is required"
		],
	},
}, {timestamps:true});

// * Creamos nuestro modelo
const author = mongoose.model("author", authorSchema);

// * Exportamos nuestro modelo
module.exports = author;
