const mongoose = require("mongoose");
const validator = require("validator");

// Connection created, and then go to that database -> if not present then it will create it
mongoose.connect("mongodb://localhost:27017/linkdb")
    .then(() => console.log("Successfully Connected!"))
    .catch((err) => console.log(err));

// Schema 
// A Mongoose schema defines the structure of the document, default values, validators, etc.
const studentData = new mongoose.Schema({
    _id: {
        type: Number,
        require: true
        // default: new mongoose.Types.ObjectId,
    },
    name: {
        type : String,          // -> ******** MONGOOSE BUIT-IN VALIDATION ********* <-
        require : true,    // require :- Make it not null, so we have to enter any value
        uppercase : true,    // uppercase :- whatever we enter in name, it will convert it into uppercase
        trim : true,    // trim :- it will remove all the starting and trailing spaces
        // minLength : 5,    // minLength :- minimum length of the String variable name
        minLength : [5, "Minimum Length of name should be greater or equal to 5"],  // **VIA THIS WE CAN SEND OUR OWN COSTUM ERROR
        maxLength : 30    // maxLength :- maximum length of the String variable name
    },
    age: {
        type : Number,
        require : true,
        //          -> ***************** CREATING OUR OWN CUSTOM VALIDATION ***************** <-
        // kind: "user-defined"
        validate(value) {
            if(!(value > 18)) {
                throw new Error("Age should be greater than 18");
            }
        }
    },
    email : {
        type : String,
        lowercase : true,
        require : true,
        unique : true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    college: {
        type : String,
        require : true,
        uppercase : true,
        enum : ["RCCIIT","TECHNO INTERNATIONAL","BIRLA INSTITUTE"]  // enum :- if value is not from this array, then it will throw error
    },
    uniRoll: {
        type : Number,
        require : true,
        unique : true
    },
    active: Boolean,
    checkDate: {
        type: Date,
        default: Date.now
    }
});

// A Mongoose model is a wrapper on the Mongoose Schema.
// A Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
// COLLECTION CREATION  :-  In simple words it create the *collection* in the currect database 
const Student = new mongoose.model("student", studentData);


//              -> ********************* INSERTION IN MONGOOSE FRAKEWORK ************************** <-
// create or insert documents
const insertSingleDocument = async () => {
    try {
        const firstStudent = new Student({
            _id: 7,
            name: "Hrittik Singh",
            age: 19,
            email : "HrttikSiNgH@gmail.com",
            college: "rcciit",
            uniRoll: 11700121015,
            active: true
        });
    
        const result = await firstStudent.save();
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}
insertSingleDocument();

const insertMultiDocument = async () => {
    try {
        const secStudent = new Student({
            _id: 2,
            name: "Niraj Prashad",
            age: 23,
            college: "Birla Institute",
            uniRoll: 11700120005,
            active: false
        });
    
        const thirdStudent = new Student({
            _id: 3,
            name: "Pratham",
            age: 23,
            college: "Techno International",
            uniRoll: 11700120015,
            active: true
        });
    
        const forthStudent = new Student({
            _id: 4,
            name: "Ankit Gupta",
            age: 22,
            college: "RCCIIT",
            uniRoll: 11700121072,
            active: true
        });
    
        const result = await Student.insertMany([secStudent,thirdStudent,forthStudent]);
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}
// insertMultiDocument();


//              -> ********************* READ DOCUMENTS IN MONGOOSE FRAMEWORK ************************** <-
// Comparison Query Operators  ->  { $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin }
//                                                                  -> $in  :-  Matches any of the values specifies in an array
// Logical Query Operators    ->  { $and, $not, $nor, $or }
// Sorting & Count Query Operator   -> collection_Name.countDocuments() or count()
//                                  -> collection_Name.sort(<filter>)

const getDocuments = async () => {
    // const result = await Student.find({college : "RCCIIT"},{name : 1, _id : 0}); // *We can directy give filter and projection as parameters
    // const result = await Student.find({college : "RCCIIT"})
    // .select({name : 1, _id : 0})  // Or we can use *select() to give the projection(specify fiels)
    // .limit(1)
    // .skip(1);


    //                        -> ************* COMPARISON QUERY OPERATOR *************** <- 
    // const result = await Student.find({age : {$gte : 23}})
    // const result = await Student.find({college : {$in : ["RCCIIT", "Techno International"]}})


    //                          -> ************* LOGICAL QUERY OPERATOR ************* <- 
    // const result = await Student.find({ $or : [ {college : "Techno International"}, {_id : 2}]});
    // const result = await Student.find({ $and : [ {college : "RCCIIT"}, {name : "Hrittik Singh"}]});


    //                       -> ************* SORTING & COUNT QUERY OPERATOR ************* <- 
    const result = await Student.find()
    .sort({name : -1})   // SORT ACCORDING TO THE PASSED PARAMETER(VALUE : 1 or -1)
    // .sort()  // It will directy give documents in order they are inserted, WITHOUT SORTING
    // .countDocuments();  // we can even use **count()** method;
    

    console.log(result);
}
// getDocuments();


//              -> ********************* UPDATING DOCUMENTS IN MONGOOSE FRAMEWORK ************************** <-
const updateDocument = async (_id) => {
    try {
        // const result = await Student.updateOne({_id},{ $set : {name : "Pratham Rai NahiAega"}})
        const result = await Student.findByIdAndUpdate({_id},{ $set : {name : "Pratham Rai"}}, { new : true});  
                                                                                        // { new : true} as option to get updated value in result
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}
// updateDocument(3);


//              -> ********************* DELETING DOCUMENTS IN MONGOOSE FRAMEWORK ************************** <-
const deleteDocument = async (_id) => {
    try {
        // const result = await Student.deleteOne({_id});
        const result = await Student.findByIdAndDelete({_id});
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}
// deleteDocument(3);