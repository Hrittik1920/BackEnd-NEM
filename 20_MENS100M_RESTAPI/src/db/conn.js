const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympic-mens-100m-race")
.then(() => {
    console.log("Connected Successfully to DB");
})
.catch((err) => {
    console.log(err);
})