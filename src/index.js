const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const CityRepository = require("./repository/city-repository");

const app = express();

const startAndSetupServer = async () => {
  // Adding middlewares
  app.use(bodyParser.json);
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, (err) => {
    if (err) {
      console.log("Error Occurred : " + err);
    } else {
      console.log("Server Started sucessfully at port : " + PORT);
    }
  });
};

startAndSetupServer();
