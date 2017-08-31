const request = require('request');

var googleCoordinates = "http://maps.googleapis.com/maps/api/geocode/json?address=303+west+colorado+blvd+monrovia+ca";

request({
  url: googleCoordinates,
  json: true
}, function(error, response, body){
  if (body) {
    console.log("Street Address: ",body.results[0].formatted_address);
    console.log("Latitude: ",body.results[0].geometry.location.lat);
    console.log("Longitude: ",body.results[0].geometry.location.lng);
  };
  if (error) {
    console.log(error);
  };

})
