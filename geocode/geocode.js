const request = require('request');

var geocodeAddress = (rawAddress, callback) => {
  let encodedAddress = encodeURIComponent(rawAddress);
  let googleCoordinates = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

  request({
    url: googleCoordinates,
    json: true
  }, function(error, response, body){
    if (error) {
      callback(`could not reach this:${googleCoordinates}`);
    }
    else if (body.status === "ZERO_RESULTS"){
      callback("found no address like that");
    }
    else if (body.status === "OK") {
      callback(undefined,{
        address:body.results[0].formatted_address,
        lat:body.results[0].geometry.location.lat,
        lng:body.results[0].geometry.location.lng
      });
    };
  })
}

module.exports = {
  geocodeAddress
}
