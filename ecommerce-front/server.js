const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
var StatsD = require('node-dogstatsd').StatsD;
var dogstatsd = new StatsD();
var dd_options = {
  'response_code':true,
  'tags': ['app:my_app']
    }
    
var connect_datadog = require('connect-datadog')(dd_options);

// Add the datadog-middleware before your router
app.use(connect_datadog);
app.use(router);

// # Increment a counter.
dogstatsd.increment('page.views')

app.use(compression());
app.use(express.static(path.join(__dirname, "build")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
