// *Cuando el cliente llame a este index 
// *le responderemos este index
const index = (req, res) => {
	res.json({
		message: "Hello World!"
	});
}

module.exports = {
	index
};