const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for.',
      string: true // will be parse as a string always.
    }
  })
  .help()
  .alias('help','h')
  .argv;

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
