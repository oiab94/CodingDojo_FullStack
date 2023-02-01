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

	// * Actualiza los datos de una persona
	const updateUser = 
	(req, res) => {
		User.findOneAndUpdate(
			{ _id: req.params.id }, 
			req.body, 
			{new:true})
			.then(updUser => res.json(updUser))
			.catch(err => res.json(err))
	}

	// * Elminiar los datos de una persona
	const deleteUser = 
		(req, res) => {
			User.deleteOne({_id: req.params.id})
				.then(confirmDel => res.json(confirmDel))
				.catch(err => res.json(err))
		}

module.exports = {
	createUser,
	getUsers,
	getOneUser,
	updateUser,
	deleteUser
};