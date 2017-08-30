const request = require('request');

var googleCoordinates = "http://maps.googleapis.com/maps/api/geocode/json?address=303+west+colorado+blvd+monrovia+ca";

request(googleCoordinates, function(error, response, body){
  console.log(body);
})
