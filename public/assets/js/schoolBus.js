// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  //student events########################################
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");

    var newEaten = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEaten
    }).then(
      function() {
        console.log("changed devoured to true");//, newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgeradd").val().trim()
    };

    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //end student events######################################################

  //bus events########################################
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");

    var newEaten = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEaten
    }).then(
      function() {
        console.log("changed devoured to true");//, newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgeradd").val().trim()
    };

    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //end bus events######################################################

  //driver events########################################
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");

    var newEaten = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEaten
    }).then(
      function() {
        console.log("changed devoured to true");//, newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgeradd").val().trim()
    };

    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //end student events######################################################

});
