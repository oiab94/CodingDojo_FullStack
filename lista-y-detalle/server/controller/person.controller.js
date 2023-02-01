const User = require("../models/person.model");

// * Agregamos la forma en la que se crea un User
const createUser = 
	(req, res) => {
		const {nombre, apellido} = req.body;
		User.create({ nombre, apellido})
			.then(user => res.json(user))
			.catch(error => res.json(error))
	};

// * Agregamos la forma en la que se recupera los datos
const getUsers = 
	(req, res) => {
		User.find({})
			.then(users => res.json(users))
			.catch(err => res.json(err))
	};
module.exports = {
	createUser,
	getUsers
};