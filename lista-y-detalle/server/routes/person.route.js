const User = require("../controller/person.controller");

const ManejadorRuta = 
	(app) => {
		app.post("/api/createUser", User.createUser);
		app.get("/api/getUsers", User.getUsers);
		app.get("/api/getOneUser/:id", User.getOneUser)
	}

module.exports = ManejadorRuta;