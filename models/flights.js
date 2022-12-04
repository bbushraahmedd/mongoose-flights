const Schema = mongoose.Schema;
	
const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date
});

// flights Collection if u look in mongoDB after putting something in it
module.exports = mongoose.model('Flight', flightSchema);