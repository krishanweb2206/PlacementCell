
const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://Kdatabase:Kdatabase@placement-cell-tracker.wl45o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const uri = process.env.MONGODB_URI || 'mongodb://localhost/placement-cell-tracker';

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to  database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// const db = mongoose.connection;

// db.on('error',console.error.bind(console,"Error connecting to MongoDB ......"));

// db.once('open',function(){
//     console.log('Connected to Database :: Mongodb')
// })


// module.exports = db;