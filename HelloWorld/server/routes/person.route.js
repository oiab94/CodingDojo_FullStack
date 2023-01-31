/**
 * * Indicamos la dirección que debemos acceder para obtener la información
 */
const PersonController = require("../controllers/person.controller");

const PersonRoute = (app) => {
	app.get("/api", PersonController.index);
}

module.exports = PersonRoute;