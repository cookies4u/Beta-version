var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = process.env.PORT || 8080; // trying this for heroku

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes =============================================================
// Import routes and give the server access to them.
// var routes = require("./controllers/gedditController.js");
// app.use("/", routes);
// app.listen(port);

require("./controllers/gedditController.js")(app);

// Syncing our sequelize models and then starting our express app
// db.sequelize.sync({ force: true }).then(function() {
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
