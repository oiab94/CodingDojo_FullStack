const User = require("../controller/person.controller");

const ManejadorRuta = 
	(app) => {
		app.post("/api/createUser", User.createUser);
		app.get("/api/getUsers", User.getUsers);
	}

module.exports = ManejadorRuta;