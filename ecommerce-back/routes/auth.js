const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requireSignin
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");
// post method for signing up
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

// testing out what we need for
// router.get("/hello", requireSignin, (req, res) => {
//   res.send("hello there");
// });

module.exports = router;
