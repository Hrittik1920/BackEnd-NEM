const fs = require("fs");

// fs.mkdirSync("./youtube")

// fs.writeFileSync("./youtube/file.txt","We are going to lear about File Sync properties of js")

// fs.appendFileSync("./youtube/file.txt",", now we are using append keyword to append owr file")


// // Byte code data get readed
// const buff_data = fs.readFileSync("./youtube/file.txt")
// console.log(buff_data)

// // ** We can't use this type of arrow func to get value in sync link async sile method
// fs.readFileSync("./youtube/file.txt",'utf-8',(data) => { console.log(data)})

// // 'utf-8'   ->    Via this Encoding we can get actual data in code 
// const original_data = fs.readFileSync("./youtube/file.txt",'utf-8')
// console.log(original_data)


// fs.renameSync("./youtube/file.txt","./youtube/text.txt")

// // .unlinkSync()    ->   use to delete any file u have created
// fs.unlinkSync("./youtube/text.txt")

// .rmdirSync()    ->   Delete folders
fs.rmdirSync("./youtube")