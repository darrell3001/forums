// function promiseThatResolvesToTwo() {
//     return new Promise( (resolve, reject) => {
//       setTimeout( () => {
//         resolve(2);
//       }, 2000);
//     });
//   }
  
//   let promise = promiseThatResolvesToTwo();
  
//   promise.then((value) => console.log(value));
  
//   console.log("here");



const myPromiseOne = Promise.resolve("myPromiseOne");

myPromiseOne.then( (value) => {
  console.log(value); 
});

const myPromiseTwo = Promise.resolve("myPromiseTwo");
console.log(myPromiseTwo); 

const myPromiseThree = Promise.resolve(myPromiseTwo);

myPromiseThree.then( (value) => {
  console.log(value); 
});


