const Flight = require('../models/flights');

module.exports = {
	index,
	new: newFlight,
	create,
	show
};

async function index(req, res) {
	const foundFlights = await Flight.find({}) 
	console.log(new Date());
	res.render('flights/index', {
		flights: foundFlights,
		currentDate: new Date()
	});

}

function newFlight(req, res) {
	const newFlight = new Flight();
	const dt = newFlight.departs;
	const destinationDate = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}T${dt
		.getHours()
		.toString()
		.padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
	res.render('flights/new', { destinationDate });
}

function create(req, res) {
	if (req.body.departs === '') delete req.body.departs;
	Flight.create(req.body);
	console.log(req.body);
	res.redirect('flights');
}

function show(req, res) {
	Flight.findById(req.params.id, function(err, flight) {
		Ticket.find({ flight: flight._id }, function(err, tickets) {
			res.render('flights/show', {
				flight,
				tickets
			});
		});
	});
}