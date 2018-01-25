var mySteps = [];
var stepsArr = [];
var steps;

// function initialize() {
//   var mapOptions = {
//     zoom: 12,
//     center: new google.maps.LatLng(16.8451789, 96.1439764)
//   };
//
//   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
// }
// $(document).ready(function() {
//   console.log("maps code loaded!");


function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
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
    document.getElementById("steps-list").innerHTML = "";

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

      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById('turn-by-turn');
      summaryPanel.innerHTML = '';
      // For each route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
          '</b><br>';
        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';

        stepsArr = route.legs[i].steps;

        for (var j = 0; j < stepsArr.length; j++) {
          steps = '<li class="map-li">' + stepsArr[j].instructions + '</li>' + '<br>';

          // console.log("steps:", steps);
          $("#steps-list").append(steps);
        }

      } //end i loop
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

// });