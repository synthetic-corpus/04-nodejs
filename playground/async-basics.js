// Sync function
console.log("Starting App");

// Async function
setTimeout(() =>{
  // Run this function after a certin amount of mS
  console.log("Heeeey I'm in a call back!");
},2000);

setTimeout(()=> {
  console.log("super fast timeout!")
},0);
// Sync function
console.log("Finishin up");
