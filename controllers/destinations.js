const Flight = require('../models/flights');

module.exports = {
    create
}

async function create(req, res) {
    try{
        const flight = await Flight.findById(req.params.id)
        flight.destinations.push(req.body)
        await flight.save()
        res.redirect(`/flights/${flight.id}`)
    } catch {flight.save(error)
    }
}