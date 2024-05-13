const mongoose = require("mongoose");

const runnerSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    dob: {
        type: Date,
        require: true,
        trim: true
    },
    country: {
        type: String,
        require: true,
        trim: true
    },
    score: {
        type: Number,
        require: true,
        trim: true
    },
    event: {
        type: String,
        default : "100m"
    }
});

const Runner = new mongoose.model("Runner",runnerSchema);

module.exports = Runner;