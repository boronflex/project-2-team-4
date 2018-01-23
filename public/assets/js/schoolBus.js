// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  //student events########################################

  $(".add-student-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var studentAddress = `${$("#input-address").val().trim()} 
                          ${$("#input-address-2").val().trim()} 
                          ${$("#input-city").val().trim()} 
                          ${$("#input-state").val().trim()} 
                          ${$("#input-zip").val().trim()}`;

    var newStudent = {
      student_first_name: $("#input-first-name").val().trim(),
      student_last_name: $("#input-last-name").val().trim(),
      guardian_name: $("#input-guardian-name").val().trim(),
      guardian_email: $("#input-email").val().trim(),
      address: studentAddress,
      busrider: true //will need to change this in the future- not set up on form yet
    };

    
    // Send the POST request.
    $.ajax("/api/students", {
      type: "POST",
      data: newStudent
    }).then(
      function() {
        console.log("added new student");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //end student events######################################################

  //bus events########################################

  //end bus events######################################################

  //driver events########################################

  //end student events######################################################

});
