const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function create(req, res) {
  Ticket.create(req.body, function (err, ticketDoc) {
    if(err) {
      console.log(err); //telling us theres an actual error, pay attention
      return res.send("theres an error, check your terminal BRO")
    }
    console.log(ticketDoc, '----------TICKET INFO-------------')
    res.redirect(`/flights/${req.params.id}`);
    console.log('ticket added');
  });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    res.render('tickets/new', {flight: req.params.id});
  })
}