const request = require('request');

apikey = 'fdfb301889ff6ba8e51bfa3706dd4f06';

var getTemp = (lat,lng, callback) =>{
  let apiCall = `https://api.darksky.net/forecast/${apikey}/${lat},${lng}`;
  //console.log(apiCall);
  request({
    url: apiCall,
    json: true
  }, function(error, response, body){
    console.log(body.currently.temperature);
  })
}

module.exports = {
  getTemp
}
