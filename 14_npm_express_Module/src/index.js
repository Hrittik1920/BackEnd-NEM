const express = require('express')
const app = express();
const path = require('path')

// The callback function has 2 parameters, request(req) and response(res),
// *The request object(req) represents the HTTP request and
// has properties for the request query string, parameters, body, HTTP headers, etc.
// *Similarly, the responce object represents the HTTP response
// that the Express app sends when it receives an HTTP request.

const staticPath = path.join(__dirname,"../public");

// middleware - express.static()
app.use(express.static(staticPath))

app.get("/", (req, res) => {
    res.send("Hello from the home page")
})

app.get("/about", (req, res) => {
    res.write("Hello from the AboutUs page")
    res.send()
})

app.get("/contact", (req, res) => {
    res.write("<h1> We are in contact form. </h1>");
    res.send();
})

app.get("/temp", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Hrittik"
        },
        {
            id: 1,
            name: "Hrittik"
        },
        {
            id: 1,
            name: "Hrittik"
        }
    ]);
})

app.listen(8000, () => {
    console.log("Listening the port at 8000")
})