const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/user");

// post method for signing up 
router.post("/signup", signup);

module.exports = router;
