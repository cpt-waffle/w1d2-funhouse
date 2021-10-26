// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.



////////////////////////////////////////////////
// wth command line arguguments???
// lots of numbers to be added toghther  <---- loop
// console.log result

//process.argv  argv <--- is an array of command line arguments
console.log('process argv--->', process.argv);
// process.argv is an array, I want everything in that array, - the first 2 elements
const slicedArray = process.argv.slice(2);
console.log('---->', slicedArray);