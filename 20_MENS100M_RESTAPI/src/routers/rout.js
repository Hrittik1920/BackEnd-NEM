const express = require("express");
const Runner = require("../models/menrunner");
const router = new express.Router();

router.get("/", (req, res) => {
    res.send("Hello from the home page via router!");
})

// Creating a runner document
router.post("/mens", async (req, res) => {
    try{
        const addingMensRecord = new Runner(req.body);
        console.log(req.body);
        const insertMen = await addingMensRecord.save();
        res.status(201).send(insertMen);
    } catch(err) {
        res.status(500).send(err);
    }
})

// Reading record documents from the database
router.get("/mens", async (req, res) => {
    try{
        const runnersData = await Runner.find().sort({"ranking" : 1});
        res.send(runnersData);
    } catch(err) {
        res.send(err);
    }
})

// Reading record by ranking
router.get("/mens/:ranking", async (req, res) => {
    try{
        const rank = req.params.ranking;
        const runnerData = await Runner.findOne({"ranking" : rank});
        if(!runnerData) {
            return res.status(404).send("Data not found for this ranking! 404 ERROR");
        }
        res.send(runnerData);
    } catch(err) {
        res.status(500).send(err);
    }
})

// Updating record by ranking
router.patch("/mens/:ranking", async (req, res) => {
    try{
        const updatedData = await Runner.findOneAndUpdate({"ranking" : req.params.ranking},req.body,{
            new: true
        });
        if(!updatedData) {
            return res.status(404).send("Data not found for this ranking! 404 ERROR");
        }
        res.send(updatedData);
    } catch(err) {
        res.status(500).send(err);
    }
})

// Deleting record by ranking
router.delete("/mens/:ranking", async (req, res) => {
    try{
        const deletedData = await Runner.findOneAndDelete({"ranking" : req.params.ranking});
        if(!deletedData) {
            return res.status(404).send("Data not found for this ranking! 404 ERROR");
        }
        res.send(deletedData);
    } catch(err) {
        res.status(500).send(err);
    }
})

module.exports = router;