const express = require("express");
const ussdRoute = require("./index");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const main = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use("/ussd", ussdRoute);
  app.use("*", (req, res) => res.status(404).send("404 Not Found"));

  app.listen(process.env.PORT || 4000, async () => {
    console.log(`Server Running ${process.env.PORT}`);
  });
};

main();
