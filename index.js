const express = require("express");
const port = 8990;
const app = express();

const db = require("./config/mongoose");

app.listen(port, function (error) {
  if (error) {
    console.log(`Error in connecting with server: ${error}`);
  }
  console.log(`Successfully connecting with server ${port}`);
});
