const express = require("express");
const router = express.Router();

const { signup, signin, signout } = require("../controllers/user");
const { userSignupValidator } = require("../validator");
// post method for signing up
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;