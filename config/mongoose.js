
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Kdatabase:Kdatabase@placement-cell-tracker.wl45o.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityKdatabase:Kdatabase@placement-cell-tracker.wl45o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB ......"));

db.once('open',function(){
    console.log('Connected to Database :: Mongodb')
})


module.exports = db;