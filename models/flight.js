const mongoose = require('mongoose');
const Schema = mongoose.Schema;
	
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Delta', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN', 'STL'],
    default: 'STL'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date
  },
  onTime: Boolean
});

// flights Collection if u look in mongoDB after putting something in it
module.exports = mongoose.model('Flight', flightSchema);