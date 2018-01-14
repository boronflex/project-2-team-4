const connection = require("./connection.js");

var orm = {
  all: function(cb) {
    connection.query("SELECT * FROM bus;", function(err, res) {
      console.log("query happened", res);
      if (err) {
        throw (err);
      }
      cb(res);
    }); //end connection . query select all
  } // end find all function





}; //end of ORM



module.exports = orm;