const request = require('request');
var geoAddress = (rawAddress) =>{
  let encodedAddress = encodeURIComponent(rawAddress);
  let googleCoordinates = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

  return new Promise ((resolve, reject) => {
    request({
      url:googleCoordinates,
      json: true
    }, function(error, response,body){
      if (error){
        reject("Could not reach address");
      }
      else if (body.status === "ZERO_RESULTS"){
        reject("Found no address like that");
      }
      else if (body.status === "OK"){
        resolve({
          address:body.results[0].formatted_address,
          lat:body.results[0].geometry.location.lat,
          lng:body.results[0].geometry.location.lng
        })
      }
    })
  })
}

geoAddress('1800 False Rue, Denver CO').then((location)=>{
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage)=>{
  console.log(errorMessage);
})
