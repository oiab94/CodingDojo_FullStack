const product = require("../models/productManager.model");

const newProduct = 
	(req, res) => {
		const {title, price, description} = req.body;

		product.create({title, price, description})
			.then(product => res.json(product))
			.catch(err => res.json(err));
	}

const getProducts = 
	(req, res) => {
		product.find()
			.then(products => res.json(products))
			.catch(err => console.log("No se consigio productos"));
	}

const getOneProduct = 
	(req, res) => {
		product.findOne({_id: req.params.id})
			.then(product => res.json(product))
			.catch(err => res.jsoon(err));
	}

module.exports = {
	newProduct,
	getProducts,
	getOneProduct
};