const express = require("express");
const { PORT } = require("./config/serverConfig");

const app = express();

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error Occurred : " + err);
  } else {
    console.log("Server Started sucessfully at port : " + PORT);
  }
});
