// // (1):-> 1st way to call different method of other package
// const server = require('./server.js')
// console.log(server)
// console.log(server.add(4,5))
// console.log(server.name)
// console.log(server.sub(5,5))


// // (2):-> 2nd way using destructuring 
const {sub,add,name} = require('./server.js')
console.log(add(4,5))
console.log(name)            
console.log(sub(5,5))