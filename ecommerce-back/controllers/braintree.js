const User = require("../models/user");
const braintree = require("braintree");
require("dotenv").config();

const gateway = braintree.connect({
  // change .Sandbox to .products when in production
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY
});

// info found on braintree generate token node in google
exports.generateToken = (req, res) => {
  gateway.clientToken.generate({}, function(err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
};
