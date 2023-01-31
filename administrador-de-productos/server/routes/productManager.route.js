const product = require("../controllers/productManager.controller");

const ManejadorDeRuta = (app) => {
	app.post("/api/newProduct", product.newProduct)
}

module.exports = ManejadorDeRuta;