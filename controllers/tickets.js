const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function create(req, res) {
  Ticket.create(req.body, function (err, ticket) {
    res.redirect('/tickets/new');
    console.log('ticket added');
  });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    res.render('tickets/new', {
      airline: 'Add Ticket',
      tickets
    });
  })
}