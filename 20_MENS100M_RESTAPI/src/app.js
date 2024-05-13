const express = require("express");
require("./db/conn");
const router = require("./routers/rout");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Connected to the port number ${port}`);
})

