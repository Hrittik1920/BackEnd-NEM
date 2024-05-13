const fs = require("fs")

// fs.mkdir("./youtube",(error) => { console.log("Folder created!")} )

// fs.writeFile("./youtube/file.txt","We are going to learn about File Async here, ",(error) => { console.log("File is made!")})

// fs.appendFile("./youtube/file.txt","append feature used of async.", (error) => { console.log("Appended file!")})

// ** we can directly read data via arrow functin in async file
// fs.readFile("./youtube/file.txt",'utf-8', (error, data) => {
//     console.log(data)
// })

// fs.rename("./youtube/file.txt","./youtube/text.txt", (error) => { console.log("Rename file!")})

// fs.unlink("./youtube/text.txt", (error) => { console.log(error)})

fs.rmdir("./youtube",(error) => { console.log("file is deleted!")})