// Events Module
// Node.js has a built-in module, called "events",
// where you can create-, fire-, and listen- for your own events.

const EventEmitter = require("events")
const events = new EventEmitter();


// // ** Example 1 :- Registering for the event to be fired only one time using once.
//events.on("sayMyName", () => {
//     console.log("Your name is Hrittik")
// }) 


// // ** Example 2 :- Create an event emitter instances and register a couple of callbacks.
// events.on("sayMyName", () => {
//     console.log("Your name is Hrittik")
// })

// events.on("sayMyName", () => {
//     console.log("Your name is Niraj")
// })

// events.on("sayMyName", () => {
//     console.log("Your name is Singh")
// })


// ** Example 3 :- Registering for the event with callbacks parameters
events.on("checkPage", (src, msg) => {
    console.log(`Status code is ${src} and Page is ${msg}`);
})

// .emit() method should always be in the last
// events.emit("sayMyName");

events.emit("checkPage", 200, "ok");