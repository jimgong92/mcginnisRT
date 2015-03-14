var express = require('express');
var app = express();

/**
 * Express Server Configuration
 */
app.set("port", process.env.PORT || 8000);
app.use(express.static(__dirname + "/src"));

/**
 * 
 */
app.listen(app.get("port"), function() {
  console.log("Listening on port %d", app.get("port"));
});