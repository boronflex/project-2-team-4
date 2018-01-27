const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const db = require("./models");
const exphbs = require("express-handlebars");
const sequelize = require("sequelize");

const chalkAnimation = require('chalk-animation');

var Promise = global.Promise || require('promise');

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

//begin code from express handlbars github repo

// Create `ExpressHandlebars` instance with a default layout.
var hbs = exphbs.create({
  defaultLayout: 'main',

  // Uses multiple partials dirs, templates in "shared/templates/" are shared
  // with the client-side of the app (see below).
  partialsDir: [
      'shared/templates/',
      'views/partials/'
  ]
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware to expose the app's shared templates to the cliet-side of the app
// for pages which need them.
module.exports = app, hbs, function exposeTemplates(req, res, next) {
  // Uses the `ExpressHandlebars` instance to get the get the **precompiled**
  // templates which will be shared with the client-side of the app.
  hbs.getTemplates('shared/templates/', {
      cache      : app.enabled('view cache'),
      precompiled: true
  }).then(function (templates) {
      // RegExp to remove the ".handlebars" extension from the template names.
      var extRegex = new RegExp(hbs.extname + '$');

      // Creates an array of templates which are exposed via
      // `res.locals.templates`.
      templates = Object.keys(templates).map(function (name) {
          return {
              name    : name.replace(extRegex, ''),
              template: templates[name]
          };
      });

      // Exposes the templates during view rendering.
      if (templates.length) {
          res.locals.templates = templates;
      }

      setImmediate(next);
  })
  .catch(next);
}

//end code from express handlbars github repo

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

//routes are being deprecated in favor of
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

const routes = require("./controllers/busController.js")
app.use("/", routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  //force: true,
  logging: true

}).then(function() {
  app.listen(PORT, function() {
    chalkAnimation.rainbow("App listening on PORT ", 2 + PORT);
  });
});