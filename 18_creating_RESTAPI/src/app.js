const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 8000;

// You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Request. We only need it for
// PUT and POST request.

// express.json() is a method inbuit in express to recognise the incoming request object as JSON object.This is a middleware
// in your application using the code: app.use(express.json());
app.use(express.json());


// // ************************************** CREATING A STUDENT DOCUMENT ******************************************
// app.post("/students", (req,res) => {
//     const user = new Student(req.body);
//     user.save()
//     .then(() => {
//         res.status(201).send(user);
//     })
//     .catch((err) => {
//         res.status(400).send(err);
//     })
// })

app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch(err) {
        res.status(400).send(err);
    }
})


// // **************************************** READING STUDENT'S DOCUMENTS *******************************************
app.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch(err) {
        res.status(500).send(err);
    }
})

app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData) {
            return res.status(404).send("Data doesn't found! 404 error");
        } else {
            res.send(studentData);
        }
    } catch(err) {
        res.status(500).send(err);
    }
})


// // ************************************* UPDATING STUDENT DOCUMENT BY ID ******************************************
app.patch("/students/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const updatedStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        if(!updatedStudent) {
            return res.status(404).send("Data doesn't found! 404 error");
        } else {
            res.send(updatedStudent);
        }
    } catch(err) {
        res.status(500).send(err);
    }
})


// // ************************************* DELETING STUDENT DOCUMENT BY ID ******************************************
app.delete("/students/:id", async (req, res) => {
    try{
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if(!deletedStudent) {
            return res.status(404).send("Data doesn't found! 404 error");
        } else {
            res.send(deletedStudent);
        }
    } catch(err) {
        res.status(500).send(err);
    }
})

app.listen(port, () => {
    console.log(`Connecting is setup at ${port}`);
})