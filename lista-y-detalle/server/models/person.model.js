const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
	nombre: { type:String },
	apellido: { type:String }
},{timestamps: true})

const User = mongoose.model("Usuario", PersonSchema);

module.exports = User;