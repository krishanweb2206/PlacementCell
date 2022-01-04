
const mongoose = require('mongoose');
const URI ="mongodb+srv://Kdatabase:Kdatabase@placement-cell-tracker.wl45o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to DataBase :: MongoDB");
};



module.exports = connectDB;