const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api")
.then( () => {
    console.log("Connection is Successful!");
}).catch((err) => {
    console.log("Not able to Connect!");
})