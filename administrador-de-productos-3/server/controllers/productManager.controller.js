const product = require("../models/productManager.model");

const newProduct = 
	(req, res) => {
		const {title, price, description} = req.body;

		product.create({title, price, description})
			.then(product => res.json(product))
			.catch(err => res.json(err))
	}

const getProducts = 
	(req, res) => {
		product.find({})
			.then(products => res.json(products))
			.catch(err => res.json(err))
	};

const getOneProduct = 
	(req, res) => {
		product.findOne({_id: req.params.id})
			.then(products => res.json(products))
			.catch(err => console.log("No se consiguio productos"))
	}

const updateProduct = 
	(req, res) => {
		product.findOneAndUpdate(
			{_id: req.params.id},
			req.body,
			{new:true}	
		)
			.then(updProduct => res.json(updProduct))
			.catch(err => res.json(err))
	}

const deleteProduct = 
	(req, res) => {
		product.deleteOne({_id: req.params.id})
			.then(confirmDel => res.json(confirmDel))
			.catch(err => res.json(err))
	}

module.exports = {
	newProduct,
	getProducts,
	getOneProduct,
	updateProduct,
	deleteProduct
};