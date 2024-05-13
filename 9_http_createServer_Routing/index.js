// The http.createServer() method includes request and response parameters which is supplie

// The request object can be used to get information about the contact HTTP request
// e.g., url, request header, and data.

// The response object can be used to send a response for a current HTTP request.

// If the response from the HTTP server is supposed to be displayed as HTTP,
// you should include as HTTP header with the correct content type.

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)


const http = require('http')

const server = http.createServer();
server.on("request",(request,response) => {
    // console.log(request.url)
    if(request.url == "/") {
        response.end("Hello from the home sides");
    } else if (request.url == "/contact") {
        response.writeHead(200,{"content-type" : "text/html"});
        response.end("We are in ContactUs sides");
    } else if (request.url == "/about") {
        // we can also write in the document via this way
        response.writeHead(200,{"content-type" : "text/html"})
        response.write("We are in AboutUs sides")
        response.end();
    } else {
        response.writeHead(404);
        response.end("<h1>404 error! Page doesn't exist</h1>");
    }
    // response.end("Hello from the other sides :>");
});

server.listen(8000,"127.0.0.1",() => {
    console.log("listening to the port server 8000")
})