const http = require('http')
const path = require("path")
const fs = require("fs")

const server = http.createServer((request,response) => {

    const data = fs.readFileSync(`${path.join(__dirname,"..")}/userApi/userApiData.json`,"utf-8");
    const objData = JSON.parse(data);

    // console.log(request.url)
    if(request.url == "/") {
        response.end("Hello from the home sides");
    } else if (request.url == "/contact") {
        response.end("We are in ContactUs sides");
    } else if (request.url == "/about") {
        // we can also write in the document via this way
        response.write("We are in AboutUs sides")
        response.end();
    } else if(request.url == "/userapi") {
        response.writeHead(200, {"content-type" : "application/json"});
        response.end(objData[1].name)
    } else {
        response.writeHead(404, {"Content-type" : "text/html"});
        response.end("<h1>404 error! Page doesn't exist</h1>");
    }
    // response.end("Hello from the other sides :>");
});

server.listen(8080,"127.0.0.1",() => {
    console.log("listening to the port server 8000")
})

// const path = require("path")
// const fs = require("fs");
// const { json } = require("stream/consumers");

// const jsonData = fs.readFileSync(`${path.join(__dirname,"..")}/userApi/normalApiData.json`,"utf-8");
// const objData = JSON.parse(jsonData)
// console.log(objData[0].name)
// // console.log(jsonData)