const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const routes = require("./controllers/busController.js")
const app = express();
const path = require("path");
const db = require("./models");
const exphbs = require("express-handlebars");
const sequelize = require("sequelize");
const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

//testing
// app.set('views', __dirname + '/views');
// app.engine('hbs', exphbs({
//   extname: 'hbs',
//   defaultLayout: 'main.hbs'
// }));
// app.set('view engine', 'hbs');
// //tesing end

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  // force: true
}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});