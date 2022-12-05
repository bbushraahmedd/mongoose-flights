const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function newFlight(req, res){
    res.render('flights/new');
}


function create(req, res) {
    // convert onTime's checkbox to boolean
    req.body.onTime = !!req.body.onTime;
    // split if it's not an empty string
    if (req.body.cast) req.body.cast = req.body.cast.split(',');
    const flight = new Flight(req.body);
     flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flights/new');
    console.log(flight);
    // for now, redirect right back to new.ejs
    res.redirect('/flights/new');
    });
}

function index(req, res){
    Flight.find({}, function(err, flightDocs) {

        console.log(flightDocs)
        res.render('flights/index', {flights: flightDocs});
    });
    
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', { airline: 'Flight Detail', flight });
    });
  }