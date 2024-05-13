const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    _id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true,
        minLength: 3,
        uppercase: true
    },
    email: {
        type: String,
        require: true,
        unique: [true, "Email id already present!"],
        lowercase : true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid Email!");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        require: true,
        unique: true
    },
    city: {
        type: String,
        require: true,
        uppercase: true
    }
})

// We will create a new COLLECTION
const Student = new mongoose.model("Student",studentSchema);

module.exports = Student;