const User = require("../models/person.model");

const createUser = 
	(req, res) => {
		const {nombre, apellido} = req.body;
		User.create({ nombre, apellido})
			.then(user => res.json(user))
			.catch(error => res.json(error))
	}
module.exports = {createUser};