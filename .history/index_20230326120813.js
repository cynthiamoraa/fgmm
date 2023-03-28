const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

const user = require("./model/user");

const database_url = "mongodb://localhost:27017/ussd";
mongoose.connect(database_url);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database connected"));

