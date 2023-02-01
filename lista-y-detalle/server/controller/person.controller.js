const User = require("../models/person.model");

// * Agregamos la forma en la que se crea un User
const createUser = 
	(req, res) => {
		const {nombre, apellido} = req.body;
		User.create({ nombre, apellido})
			.then(user => res.json(user))
			.catch(error => res.json(error))
	};

// * Recupera los datos de los usuarios
const getUsers = 
	(req, res) => {
		User.find({})
			.then(users => res.json(users))
			.catch(err => res.json(err))
	};

// * Recupera los datos de una persona
const getOneUser =
	(req, res) => {
		User.findOne({ _id: req.params.id })
			.then(user => res.json(user))
			.catch(err => res.json(err))
	}

module.exports = {
	createUser,
	getUsers,
	getOneUser
};