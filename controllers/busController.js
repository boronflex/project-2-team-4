const express = require("express");
const router = express.Router();
const chalkAnimation = require('chalk-animation');

//import models

var db = require("../models");

//html routes=================================================

//home page
router.get("/", function(req, res) {
  res.render("index");
});

//input form for driver, student, and bus
router.get("/inputs", function(req, res) {

  db.Bus.findAll({

  }).then(function(dbBus) {
    chalkAnimation.rainbow("Bus table queried", 2);
    // console.log("dbStu =", dbStu[0].student_first_name);

    var busNumber;
    var busNumberArr = [];
    
    for (let busNumber of Object.values(dbBus)) {
      busNumber = busNumber.dataValues//.bus_number;
      busNumberArr.push(busNumber);
    }

    var hbsObject = {
      busNumber: busNumberArr,
    };

    // console.log(hbsObject);

    // console.log(hbsObject.busNumber[0].id);

    res.render("inputs", hbsObject);

  });

  // res.render("inputs");

});

//testing update search for Students
function searchAllKids() {
  router.get("/inputs", function(req, res) {

    db.Bus.findAll({

    }).then(function(dbBus) {
      chalkAnimation.rainbow("Bus table queried", 2);
      // console.log("dbStu =", dbStu[0].student_first_name);

      var busNumber;
      var busNumberArr = [];

      for (let busNumber of Object.values(dbBus)) {
        busNumber = busNumber.bus_number;
        busNumberArr.push(busNumber);

      } //end of loop

      var hbsObject = {
        busNumber: busNumberArr,
      };

      res.render("inputs", hbsObject);

    });

  });
}
//end testing

//bus driver info page with map, directions, manifest
// router.get("/driver-info-page", function(req, res) {
//   res.render("driver-info-page");
// });

//parent info name with driver info
router.get("/parent-info-page", function(req, res) {
  res.render("parent-info-page");
});

//api routes==================================================

//all routes for students table
// GET route for getting all of the students
router.get("/driver-info-page", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Student.findAll({
    where: {
      busrider: true
    }
  }).then(function(dbStu) {
    chalkAnimation.rainbow("Student Table Queried", 2);
    // console.log("dbStu =", dbStu[0].student_first_name);

    var addresses;
    var addressesArr = [];

    for (let addresses of Object.values(dbStu)) {
      addresses = addresses.address;
      addressesArr.push(addresses);

    } //end of loop

    var hbsObject = {
      addresses: addressesArr,
      students: dbStu
    };

    res.render("driver-info-page", hbsObject);

  });

});

// POST route for saving a new student
router.post("/inputs", function(req, res) {
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property (req.body)
  db.Student.create({
      student_first_name: req.body.student_first_name,
      student_last_name: req.body.student_last_name,
      gender: req.body.gender,
      guardian_name: req.body.guardian_name,
      guardian_email: req.body.guardian_email,
      address: req.body.address,
      busrider: req.body.busrider,
      BusId: req.body.BusId

    }
    // , {
    //   include:[{
    //     association: buses.BusId
    //   }]
    // }
    ).then(function(dbStu) {
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
      address: req.body.address,
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

//route to display bus and driver student is assigned to
router.get("/api/parent-search/:fname/:lname", function(req, res) {
  // findAll returns all entries for a table when used with no options

  studentFirstName = req.params.fname
  studentLastName = req.params.lname
  console.log(studentFirstName, studentLastName);

  db.Student.findOne({
    where: {
      student_first_name: studentFirstName,
      student_last_name: studentLastName
      //need to add include here to get bus and driver info
    },
    include: [db.Bus]
  }).then(function(dbStu) {

    chalkAnimation.rainbow("Student Table Queried", 2);

    //console.log(dbStu.dataValues);

    var hbsObject = {

      studentName: `${dbStu.dataValues.student_first_name} ${dbStu.dataValues.student_first_name}`,
      
      // driverName:,
      // driverImage:,
      busNumber: dbStu.dataValues.Bus.dataValues.bus_number


    };

    console.log(hbsObject);

    res.render("parent-info-page", hbsObject);

  });

});

//======================begin buses======================================================================


//all routes for buses table
// GET route for getting all of the buses
router.get("/api/buses", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Bus.findAll({}).then(function(dbBus) {
    chalkAnimation.rainbow("bus table querried", 2);
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
      driver_comments: req.body.driver_comments,
      BusId: req.body.BusId

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
  res.json({
    message: "Image Send Successful"
  });
})

// router.get("/driverImage", function(req, res) {
//   res.sendFile("../views/drag&drop.html");
// })

module.exports = router;