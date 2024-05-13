const express = require("express");
const Student = require("../models/students")
// 1. we need to create a router
const router = new express.Router();

// 2. we need to define the router
router.get("/ro", (req, res) => {
    res.send("Hello from the router!")
});

// // ************************************** CREATING A STUDENT DOCUMENT ******************************************
// router.post("/students", (req,res) => {
//     const user = new Student(req.body);
//     user.save()
//     .then(() => {
//         res.status(201).send(user);
//     })
//     .catch((err) => {
//         res.status(400).send(err);
//     })
// })

router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch(err) {
        res.status(400).send(err);
    }
})


// // **************************************** READING STUDENT'S DOCUMENTS *******************************************
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch(err) {
        res.status(500).send(err);
    }
})

router.get("/students/:id", async (req, res) => {
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
router.patch("/students/:id", async (req, res) => {
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
router.delete("/students/:id", async (req, res) => {
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

module.exports = router;