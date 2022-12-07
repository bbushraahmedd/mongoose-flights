const Flight = require('../models/flight')

module.exports = {
    create
}


//creating a destination
function create(req, res){

    console.log(req.body);
    console.log(req.params.id);

Flight.findById(req.params.id, function(err, flightDoc){

    if(err){
        console.log(err)
        return res.send('error from create reviews check the terminal')
    }
    console.log(flightDoc);

    flightDoc.destinations.push(req.body);

    flightDoc.save(function(err){
        res.redirect(`/flights/${req.params.id}`)
        });
    });
}