const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// For serving static files 
app.use('/static',express.static('static'));

// Setting Template Engines as pug
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));

app.get("/demo", (req,res) => {
    res.status(200).render('demo',{
        title : "Pug Html",
        name : "Hrittik Singh",
        content1 : "We have 1st paragraph here",
        content2 : "We have second paragraph here",
        content3 : "Normal text is written here",
        content4 : "<p>We are here to notify that, we are using paragraph here</p>"
    });
})

app.get("/",(req,res) => {
    res.status(200).send("This is the home page of the express website");
})

app.listen(port,() => {
    console.log(`We are hosting our site on http://localhost:${port}`);
})
