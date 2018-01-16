// Requiring our models
var db = require( "../models" );
// var Bus = require("../models/busModel.js");

// Routes
// =============================================================
module.exports = function( app ) {

  // GET route for getting all of the buses
  app.get( "/api/buses", function( req, res ) {
    // findAll returns all entries for a table when used with no options
    db.Bus.findAll( {} ).then( function( dbBus ) {
      console.log( "bus query happened" );
      // We have access to the buses as an argument inside of the callback function
      // res.render( "index" );
      res.json( dbBus );
    } );
  } );

  // GET route for getting all of the students
  app.get( "/api/students", function( req, res ) {
    // findAll returns all entries for a table when used with no options
    db.Student.findAll( {} ).then( function( dbStu ) {
      console.log( "student query happened" );
      // We have access to the buses as an argument inside of the callback function
      // res.render( "index" );
      res.json( dbStu );
    } );
  } );

  // POST route for saving a new student
  app.post( "/api/students", function( req, res ) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Student.create( {
        student_last_name: req.body.student_last_name,
        student_first_name: req.body.student_first_name,
        gender: req.body.gender,
        guardian_name: req.body.guardian_name,
        guardian_email: req.body.guardian_email,
        address_num: req.body.address_num,
        address_stname: req.body.address_stname,
        City: req.body.City,
        State: req.body.State,
        Zipcode: req.body.Zipcode,
        Busrider: req.body.Busrider

      } ).then( function( dbStu ) {
        // We have access to the new todo as an argument inside of the callback function
        res.json( dbStu );
      } )
      .catch( function( err ) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json( err );
      } );
  } );

  // DELETE route for deleting students. We can get the id of the student to be deleted from
  // req.params.id
  app.delete( "/api/students/:id", function( req, res ) {
    // We just have to specify which student we want to destroy with "where"
    db.Student.destroy( {
      where: {
        id: req.params.id
      }
    } ).then( function( dbStu ) {
      res.json( dbStu );
    } );
  } );




}; //end module.exports




//

//
//   // PUT route for updating todos. We can get the updated todo data from req.body
//   app.put("/api/todos", function(req, res) {
//
//     // Update takes in an object describing the properties we want to update, and
//     // we use where to describe which objects we want to update
//     db.Todo.update({
//       text: req.body.text,
//       complete: req.body.complete
//     }, {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbTodo) {
//       res.json(dbTodo);
//     })
//     .catch(function(err) {
//       // Whenever a validation or flag fails, an error is thrown
//       // We can "catch" the error to prevent it from being "thrown", which could crash our node app
//       res.json(err);
//     });
//   });
// };