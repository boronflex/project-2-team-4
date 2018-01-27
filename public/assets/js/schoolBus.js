var newStudent;

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {

  //student events########################################

  $(".add-student-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var studentAddress = `${$("#input-address").val().trim()} ${$("#input-address-2").val().trim()} ${$("#input-city").val().trim()} ${$("#input-state").val().trim()} ${$("#input-zip").val().trim()}`;

    console.log(studentAddress);

    newStudent = {
      student_first_name: $("#input-first-name").val().trim(),
      student_last_name: $("#input-last-name").val().trim(),
      guardian_name: $("#input-guardian-name").val().trim(),
      guardian_email: $("#input-email").val().trim(),
      address: studentAddress,
      busrider: $("#input-transportation").is(":checked"),
      gender: $("#input-gender").val().trim(),
      BusId: parseInt($("#assign-student-bus").val().trim())
    };

    //console.log(studentAddress);
    console.log(newStudent);


    // Send the POST request.
    $.ajax("/inputs", {
      type: "POST",
      data: newStudent
    }).then(
      function() {
        console.log("added new student");

        $(".modal").modal('show');
        $("#modal-body-text").text('Welcome to CHS, ' + newStudent.student_first_name + '!');

        //the below reload is commented out because it was breaking the modal

        //Reload the page to get the updated list
        // location.reload();
      }
    );

    // Send the PUT request. (update student)
    //   $.ajax("/inputs", {
    //     type: "POST",
    //     data: newStudent
    //   }).then(
    //     function() {
    //       console.log("student info updated");
    //       //Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });

    //begin on click event for update student Information
    //       $(".update-student-form").on("submit", function(event) {
    //           event.preventDefault();
    // var updatedStudent = {
    //
    // }
    //         }


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
        driver_first_name: $("#input-driver-first-name").val().trim(),
        driver_last_name: $("#input-driver-last-name").val().trim(),
        // driver_img: $("#input-image").val().trim(),
        driver_comments: $("#input-comments").val().trim(),

        //dan's code
        driver_img: imagex,
        //dan's code

        BusId: parseInt($("#assign-driver-bus").val().trim())
      };

      console.log(newDriver);

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

    //dan's code
    $(document).on("click", "#upload", function() {
      event.preventDefault();
      console.log("here");
      openPicker();
    });
    //dan's code



    //end student events######################################################

  });

  // parent event ################################################################

  $(".search-child-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var searchKid = $("#student-name-to-search").val().trim();

    // var regExp = /[^a-zA-Z\s]/;

    // searchKid = searchKid.match(regExp);

    searchKid = searchKid.split(" ");

    console.log(searchKid);

    var student_first_name = searchKid[0];
    var student_last_name = searchKid[1];

    // Send the GET request.
    $.ajax(`/api/parent-search/${student_first_name}/${student_last_name}`, {
      method: "GET"
    }).then(
      function(data) {
        console.log("searching for kid");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});