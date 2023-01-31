const User = require("../controller/person.controller");

const ManejadorRuta = 
	(app) => {
		app.post("/api/createUser", User.createUser)
	}

module.exports = ManejadorRuta;