const express = require("express");
const vehicles = require("./vehicles");
const app = express();


app.get("/", (req, res) => {
    res.send(vehicles);
});

app.listen(4000, () => {
    console.log("server starting");
})