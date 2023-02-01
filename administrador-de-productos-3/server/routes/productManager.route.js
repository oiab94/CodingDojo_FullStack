const product = require("../controllers/productManager.controller");

const ManejadorDeRuta = (app) => {
	app.get("/api/getProducts", product.getProducts);
	app.get("/api/getOneProduct/:id", product.getOneProduct);
	app.put("/api/updateProduct/:id", product.updateProduct);
	app.post("/api/newProduct", product.newProduct);
	app.delete("/api/deleteProduct/:id", product.deleteProduct);
}

module.exports = ManejadorDeRuta;