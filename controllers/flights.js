const flight = require('../models/flight');

module.exports = {
	index,
	new: newFlight,
	create,
	show,
	delete: deleteFlight
};

function index(req, res) {
	flight.find
}

function newFlight(req, res) {
	newFlight.new
}

function create(req, res) {
	flight.create(req.body)
}

function show(req, res) {
	flight.findById(req.params.id)
}

function deleteFlight(req, res) {
	flight.delete
}