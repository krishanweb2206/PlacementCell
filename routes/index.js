const express = require("express");
const router = express.Router();

console.log("Router files is loading..........");

const UserController = require("../controllers/UserController");

//routes for homepage
router.get("/", UserController.home);

router.use("/users", require("./user"));
router.use('/student',require('./student'));
router.use("/company", require("./company"));


module.exports = router;
