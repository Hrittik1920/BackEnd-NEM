const fs = require("fs");

const objData = {
    name : "Hrittik",
    age : 22,
    classRoll : "CSE2021/028",
    uniRoll : 11700121015
};

// console.log(objData)
// const jsonData = JSON.stringify(objData)
// console.log(jsonData.name)
// console.log(jsonData)

// const againObjData = JSON.parse(jsonData)
// console.log(againObjData)


// TODAY TASK:
// 1: convert to JSON
// 2: write this content to a file 
// 3: read that file
// 4: again convert to Object
// 5: print in console (object)

const jsonData = JSON.stringify(objData);
fs.writeFile("./json1.json",jsonData,(error) => {
    console.log("data added to file successfully!")
});

fs.readFile("./json1.json",'utf-8',(error,data) => {
    console.log(data);
});

const againObjData = JSON.parse(jsonData);
console.log(againObjData)

