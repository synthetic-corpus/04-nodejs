
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./darksky/weather')

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

// Takes in a string with spaces from arguments.
// Converts it something useful for google API.

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage){
    console.log(errorMessage);
  }
  else{
    console.log(results);
    weather.getTemp(results.lat,results.lng,(errorMessage, results) => {
      if (errorMessage){
        console.log(errorMessage)
      }
      else{
        console.log("The Tempature is ",results.temperature)
      }
    })
  }
});
