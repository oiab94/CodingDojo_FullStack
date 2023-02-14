const author = require("../controllers/author.controller");

// * Las rutas que nos permiten conectar a nuestra API
module.exports = 
	(app) => {
		app.get("/api/getAuthors", author.getAuthors),
		app.get("/api/getOneAuthor/:id", author.getOneAuthor),
		app.post("/api/newAuthor", author.newAuthor),
		app.put("/api/updateAuthor/:id", author.updateAuthor)
	};