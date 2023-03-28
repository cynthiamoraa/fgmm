const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");



const user = require("./model/user");

const database_url = "mongodb://localhost:27017/ussd";
mongoose.connect(database_url);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database connected"));

