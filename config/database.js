const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flightss', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', function() {
    console.log(`There was an ${err}`);
  });