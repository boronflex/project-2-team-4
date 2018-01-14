const orm = require("../config/orm.js");

var bus = {
  all: function(cb) {
    orm.all(function(res) {
      // console.log("res:", res);

      cb(res);
    });
  }
};

module.exports = bus;