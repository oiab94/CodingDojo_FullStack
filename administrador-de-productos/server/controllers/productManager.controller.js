const product = require("../models/productManager.model");

const newProduct = 
	(req, res) => {
		const {title, price, description} = req.body;

		product.create({title, price, description})
			.then(product => res.json(product))
			.catch(err => res.json(err))
	}

module.exports = {newProduct};