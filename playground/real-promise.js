var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }else {
        reject("One of those is not a number, silly.");
      }
    },1500)
  })
}

asyncAdd('ee',4).then((res) =>{
  console.log(res);
}, (errorMessage) => {
  console.log(errorMessage);
});
