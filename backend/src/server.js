const express = require("express");
const vehicles = require("./vehicles");
const app = express();

app.use( (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');

  next();
})

  app.use((req, res, next) => setTimeout(next, 2000));

// the arrow function is not called right away, it is just defined here
// app will call it when it gets a GET request with a path "/vehicles"
app.get("/vehicles", (req, res) => {
  console.log("GET Vehicles");
  res.send(vehicles);
});

//the arrow function will be exectued when server actually starts,
//app.listen gets exectued immediately
app.listen(4000, () => {
  console.log("server starting");
});
