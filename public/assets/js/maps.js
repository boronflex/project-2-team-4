var mySteps;

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {
      lat: 30.18,
      lng: -95.28
    }
  });
  directionsDisplay.setMap(map);

  document.getElementById('submit').addEventListener('click', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var waypts = [];
  var checkboxArray = document.getElementById('waypoints');
  for (var i = 0; i < checkboxArray.length; i++) {
    // console.log("checkbox array", checkboxArray);
    if (checkboxArray.options[i].selected) {
      waypts.push({
        location: checkboxArray[i].value,
        stopover: true
      });
    }
  }

  directionsService.route({
    origin: document.getElementById('start').value,
    destination: document.getElementById('end').value,
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {

      //pulling turn by turn instructions out of response
      var legsArr = response.routes[0].legs;

      for (var i = 0; i < legsArr.length; i++) {
        // console.log("legsArr:", legsArr);
        var stepsArr = legsArr[i].steps;

        for (var j = 0; j < stepsArr.length; j++) {

          var steps = stepsArr[j].instructions;

          //trying to push steps into an array of strings so I can export as handlebars object; it say cannot read property of underfined, ie mySteps isn't defined?
          // mySteps.push(steps);
          console.log("mySteps:", steps);

          var stepsObj = {
            steps: mySteps
          };

          //res is undefined!
          // res.render("index", steps);

        } //end j loop
      } // end outter for loop

      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById('directions-panel');
      summaryPanel.innerHTML = '';
      // For each route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
          '</b><br>';
        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        // console.log("sum panel", summaryPanel);

      }
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}