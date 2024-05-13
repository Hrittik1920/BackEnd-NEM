const fs = require('fs')
const http = require('http')

const server = http.createServer();

server.on("request",(req,res) => {
    // fs.readFile("./normalApiData.json", (err,data) => {
    //     if (err) return console.log(err);
    //     res.end(data.toString());
    // })


    // 2nd Way
    // Reading from a Stream 
    // Readable, writable, duplex and transform operation
    // Handle stream events --> data, end, error and finish
    // const rstream = fs.createReadStream("./normalApiData.json");
    // rstream.on('data', (chunkdata) => {
    //     res.write(chunkdata)
    // });
    // rstream.on('end',() => {
    //     res.end()
    // })
    // rstream.on('error',() => {
    //     res.end("file not found!")
    // })


    // 3rd Way
    // using pipe() mehtod
    const rsteam = fs.createReadStream("./normalApiData.json");
    rsteam.pipe(res);
    rsteam.on('error',() => {
        res.end("File not found!")
    })
})

server.listen(4000,"127.0.0.1");