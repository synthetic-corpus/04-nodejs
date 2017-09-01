/*
  Promise will go get an async request.
  Will return a resolve or reject.
  Resolve or reject functions will only take on argument.
  Usually, an {} object.
*/
let somePromise = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      // If the async request works. Return Resolve...
      resolve('Hey. this thing worked');
    },2500);

    // if the async request fails... return reject.
  }
);

somePromise.then((message) =>
  {
    console.log(message);
  });
