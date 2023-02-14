const author = require("../models/author.model");

// * POST un nuevo autor
const newAuthor = 
	(req, res) => {
		const { name } = req.body;

		author.create({ name })
			.then(author => res.json(author))
			.catch(err => res.json(err))
	};

// * GET un autor
const getOneAuthor = 
	(req, res) => {
		author.findById({_id: req.params.id})
			.then(author => res.json(author))
			.catch(err => console.log("No se consiguio autor"));
	};

// * GET todos los autores
const getAuthors = 
	(req, res) => {
		author.find({})
			.then(author => res.json(author))
			.catch(err => res.json(err));
	};

// * PUT actualizar un autor
const updateAuthor = 
	(req, res) => {
		author.findOneAndUpdate(
			{ _id:req.params.id },
			req.body,
			{ new:true }		
		)
			.then(updAuthor => res.json(updAuthor))
			.catch(err => res.json(err))
	}

// * Exportamos las operaciones que se pueden realizar
module.exports = {
	newAuthor,
	getOneAuthor,
	updateAuthor,
	getAuthors
};