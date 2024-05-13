const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const router = require("./routers/rout");

const app = express();
const port = process.env.PORT || 8000;

// You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Request. We only need it for
// PUT and POST request.
// express.json() is a method inbuit in express to recognise the incoming request object as JSON object.This is a middleware
// in your application using the code: app.use(express.json());
app.use(express.json());
// 3. We need to register our router
app.use(router);

app.listen(port, () => {
    console.log(`Connecting is setup at ${port}`);
})