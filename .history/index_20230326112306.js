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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/", (req, res) => {
  const { sessionId, phoneNumber, text } = req.body;
  let response;

  if (text === "") {
    response = "CON Enter your name";
  } else if (text !== "") {
    let array = text.split("*");
    if (array.length === 1) {
      response = "CON Enter your ID number";
    }
    else if (array.length>1) {

    }

  setTimeout(() => {
    res.send(response);
    res.end();
  }, 2000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
