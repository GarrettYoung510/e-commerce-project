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

// controller method for processing payment takes in 2 parameters the request and the response
exports.processPayment = (req, res) => {
  // nonefrom the client is the how we structue in backend req.body.paymentmethodnonce
  let nonceFromTheClient = req.body.paymentMethodNonce;
  // this is the amount 
  let amountFromTheClient = req.body.amount;
  // charge per braintree documentation
  let newTransaction = gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,
      options: {
        submitForSettlement: true
      }
    },
    (error, result) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.json(result);
      }
    }
  );
};
