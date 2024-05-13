const express = require("express");
const app = express();
const path = require("path")

const staticCSS = path.join(__dirname,"../public");


app.set("view engine","hbs");

app.get("/", (req,res) => {
    res.render("index");
})
app.get(express.static(staticCSS));

app.listen(8080, () => {
    console.log("App is listening to the port 8080");
})