const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const app = express();


//no matter what path is sent, they will all go to index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

//starting our server

app.listen(process.env.PORT || 5080, () => console.log("Server running..."));