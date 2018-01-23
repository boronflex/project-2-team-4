const express = require("express");
const router = express.Router();

//import models

var db = require("../models");
// const bus = require( "../models/buses.js" );
// const drivers = require( "../models/drivers.js" );
// const students = require( "../models/students.js" );

//html routes=================================================

//home page
router.get("/", function(req, res) {
  res.render("index");
});

//input form for driver, student, and bus
router.get("/inputs", function(req, res) {
  res.render("inputs");
});

//bus driver info page with map, directions, manifest
router.get("/driver-info-page", function(req, res) {
  res.render("driver-info-page");
});

//parent info name with driver info
router.get("/parent-info-page", function(req, res) {
  res.render("parent-info-page");
});


//api routes==================================================


//all routes for students table
// GET route for getting all of the students
router.get("/api/students", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Student.findAll({
    where: {
      busrider: true
    }
  }).then(function(dbStu) {
    console.log("student query happened");

    var addresses;
    var addressesArr = [];

    for (let addresses of Object.values(dbStu)) {
      addresses = addresses.address;
      addressesArr.push(addresses);
      // console.log(addresses);

    } //end of loop

    // console.log("all addresses:", addressesArr);
    // console.log("first address:", addressesArr[0]);

    var hbsObject = {
      addresses: addressesArr
    };

    // console.log("Students is:", dbStu[0].student_first_name);
    // We have access to the students as an argument inside of the callback function
    // res.json(addressesArr);
    res.render("driver-info-page", hbsObject);


  });
});

// POST route for saving a new student
router.post("/api/students", function(req, res) {
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property (req.body)
  db.Student.create({
      student_last_name: req.body.student_last_name,
      student_first_name: req.body.student_first_name,
      gender: req.body.gender,
      guardian_name: req.body.guardian_name,
      guardian_email: req.body.guardian_email,
      address_lat: req.body.address_lat,
      address_long: req.body.address_long,
      busrider: req.body.Busrider

    }).then(function(dbStu) {
      res.json(dbStu);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
});

// DELETE route for deleting students. We can get the id of the student to be deleted from
// req.params.id
router.delete("/api/students/:id", function(req, res) {
  // We just have to specify which student we want to destroy with "where"
  db.Student.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbStu) {
    res.json(dbStu);
  });
});

// PUT route for updating students. We can get the updated student data from req.body
router.put("/api/students", function(req, res) {

  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  db.Student.update({
      student_last_name: req.body.student_last_name,
      student_first_name: req.body.student_first_name,
      gender: req.body.gender,
      guardian_name: req.body.guardian_name,
      guardian_email: req.body.guardian_email,
      address_lat: req.body.address_lat,
      address_long: req.body.address_long,
      busrider: req.body.Busrider
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbStu) {
      res.json(dbStu);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
});

//======================begin buses======================================================================


//all routes for buses table
// GET route for getting all of the buses
router.get("/api/buses", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Bus.findAll({}).then(function(dbBus) {
    console.log("bus query happened");
    // We have access to the buses as an argument inside of the callback function
    // res.render("index.handlebars");
    res.json(dbBus);
  });
});

// POST route for creating a new bus
router.post("/api/buses", function(req, res) {
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property (req.body)
  db.Bus.create({
      bus_number: req.body.bus_number,
      bus_driver: req.body.bus_driver,
      riders: req.body.riders,
      capacity: req.body.capacity,
      home_base: req.body.home_base

    }).then(function(dbBus) {
      res.json(dbBus);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
});

// DELETE route for deleting bus routes. We can get the id of the bus to be deleted from
// req.params.id
router.delete("/api/buses/:id", function(req, res) {
  // We just have to specify which student we want to destroy with "where"
  db.Bus.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbBus) {
    res.json(dbBus);
  });
});

// PUT route for updating students. We can get the updated student data from req.body
router.put("/api/buses", function(req, res) {

  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  db.Bus.update({
      bus_number: req.body.bus_number,
      bus_driver: req.body.bus_driver,
      riders: req.body.riders,
      capacity: req.body.capacity,
      home_base: req.body.home_base
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBus) {
      res.json(dbBus);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
});

//======================end buses======================================================================

//======================begin drivers==================================================================

//all routes for drivers table
// GET route for getting all of the drivers
router.get("/api/drivers", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Driver.findAll({}).then(function(dbDriver) {
    console.log("drivers query happened");
    // We have access to the drivers as an argument inside of the callback function
    // res.render( "index" );
    res.json(dbDriver);
  });
});

// POST route for creating a new driver
router.post("/api/drivers", function(req, res) {
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property (req.body)
  db.Driver.create({

      driver_first_name: req.body.driver_first_name,
      driver_last_name: req.body.driver_last_name,
      driver_img: req.body.driver_img,
      driver_comments: req.body.driver_comments

    }).then(function(dbDriver) {
      res.json(dbDriver);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
});

// DELETE route for deleting drivers routes. We can get the id of the driver to be deleted from
// req.params.id
router.delete("/api/drivers/:id", function(req, res) {
  // We just have to specify which driver we want to destroy with "where"
  db.Driver.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbDriver) {
    res.json(dbDriver);
  });
});

// PUT route for updating drivers. We can get the updated driver data from req.body
router.put("/api/drivers", function(req, res) {

  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  db.Driver.update({
      driver_first_name: req.body.driver_first_name,
      driver_last_name: req.body.driver_last_name,
      driver_img: req.body.driver_img,
      driver_comments: req.body.driver_comments
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbDriver) {
      res.json(dbDriver);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
});

//==========Driver Image=============================

router.post("/api/image", function(req, res) {
  
  console.log(req.body.driver_img);
  res.json({message: "Image Send Successful"});
})

// router.get("/driverImage", function(req, res) {
//   res.sendFile("../views/drag&drop.html");
// })

module.exports = router;