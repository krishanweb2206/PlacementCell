require("dotenv").config();

// MONGODB CONNECTION THROUGH MONGOOSE MODULE

const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to DataBase :: MongoDB");
};

module.exports = connectDB;
