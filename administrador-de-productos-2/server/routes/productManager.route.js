const product = require("../controllers/productManager.controller");

const ManejadorDeRuta = (app) => {
	app.get("/api/getProducts", product.getProducts);
	app.get("/api/getOneProduct/:id", product.getOneProduct)
	app.post("/api/newProduct", product.newProduct);
}

module.exports = ManejadorDeRuta;