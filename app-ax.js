
const yargs = require('yargs');
const axios = require('axios');

// Sets the arguments from the command prompt in a easily attainable way.
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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl =`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

// axios.get has a promise within it. Should make things a bit simplier.
axios.get(geocodeUrl).then((response)=>{
  if(response.data.status === 'ZERO_RESULTS'){
    // Throws an error that is caught at the end of the chain.
    // Prevents any other returns.
    throw new Error('Cannot find this address');
  }

  // Get data from the response if no error above
  const apikey = 'fdfb301889ff6ba8e51bfa3706dd4f06';
  const location = response.data.results[0].geometry.location;
  const weatherUrl = `https://api.darksky.net/forecast/${apikey}/${location.lat},${location.lng}`;
  // returns a new promise.
  return axios.get(weatherUrl);
}).then((response)=>{
  var temperature = response.data.currently.temperature;
  var feelsLike = response.data.currently.apparentTemperature;
  // To be finished another time.
  console.log(`Current temp is ${temperature} but it feels like ${feelsLike}`);
}).catch((error)=>{
  // Catches any Errors thrown.
  if (error.code === 'ENOTFOUND'){
    console.log('Unable to connect to APU servers :-(');
  } else{
    console.log(error.message);
  }
})
