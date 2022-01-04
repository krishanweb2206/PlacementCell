
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || 'mongodb://localhost/placement-cell-tracker';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB ......"));

db.once('open',function(){
    console.log('Connected to Database :: Mongodb')
})


module.exports = db;