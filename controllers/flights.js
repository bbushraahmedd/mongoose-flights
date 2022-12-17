const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function newFlight(req, res){
    const newFlight = new Flight ();
    res.render('flights/new', {defaultDeparture: newFlight.departs});
}

function create(req, res) {

    Flight.create(req.body, function(err, flightDoc){
        if (err) {
            console.log(err)
            return res.send('theres an error')};
    console.log(flightDoc);
    
    res.redirect('/');
    }); //end of callback func
}

function index(req, res){
    Flight.find({}, function(err, flightDocs) {

        console.log(flightDocs)
        res.render('flights/index', {flights: flightDocs});
    });
    
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flightDoc) {
        Ticket.find({flight: flightDoc._id}, function(err, ticketDocs){


            console.log(req.body, '<<<<<<<<<<THIS IS REQ.BODY')
            console.log(flightDoc, '-----------THIS IS THE FLIGHTDOC')
            console.log(ticketDocs, '~~~~~~~THIS IS TICKETDOCS')

            res.render('flights/show', { airline: 'Flight Detail', flight: flightDoc, ticket: ticketDocs });
        });
    });
  }