const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const routes = require("./controllers/busController.js")
const app = express();
const path = require("path");

var exphbs = require("express-handlebars");

const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(port);

console.log("listening on port:", port);