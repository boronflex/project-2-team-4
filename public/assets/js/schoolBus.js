// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  //student events########################################

  $(".add-student-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var studentAddress = `${$("#input-address").val().trim()} ${$("#input-address-2").val().trim()} ${$("#input-city").val().trim()} ${$("#input-state").val().trim()} ${$("#input-zip").val().trim()}`;

    console.log(studentAddress);

    var newStudent = {
      student_first_name: $("#input-first-name").val().trim(),
      student_last_name: $("#input-last-name").val().trim(),
      guardian_name: $("#input-guardian-name").val().trim(),
      guardian_email: $("#input-email").val().trim(),
      address: studentAddress,
      busrider: $("#input-transportation").is(":checked"),
      gender: $("#input-gender").val().trim(),
      busrider: true, //will need to change this in the future- not set up on form yet
      BusId: $("#bus-id").val().trim()
    };


    // Send the POST request.
    $.ajax("/inputs", {
      type: "POST",
      data: newStudent
    }).then(
      function() {
        console.log("added new student");
        //Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //end student events######################################################

  //bus events########################################

  $(".add-bus-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBus = {
      bus_number: $("#input-bus-number").val().trim(),
      capacity: $("#capacity").val().trim(),
      home_base: $("#input-home-base").val().trim()
    };


    // Send the POST request.
    $.ajax("/api/buses", {
      type: "POST",
      data: newBus
    }).then(
      function() {
        console.log("added new bus");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  //end bus events######################################################

  //driver events########################################

  $(".add-driver-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newDriver = {
      driver_first_name: $("#input-first-name").val().trim(),
      driver_last_name: $("#input-last-name").val().trim(),
      driver_img: imagex,
      driver_comments: $("#input-comments").val().trim(),
    };


    // Send the POST request.
    $.ajax("/api/drivers", {
      type: "POST",
      data: newDriver
    }).then(
      function() {
        console.log("added new driver");
        // Reload the page to get the updated list
        //location.reload();
      }
    );
  });

//---------upload driver image button-------

    $(document).on("click", "#upload", function() {
      event.preventDefault();
      console.log("here");
      openPicker();
    })
  //end student events######################################################

});