const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const app = express();


//replacing any calls for the /static direc
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));


//no matter what path is sent, they will all go to index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve( __dirname, "frontend", "index.html"));
});

//starting our server

app.listen(process.env.PORT || 5080, () => console.log("Server running..."));