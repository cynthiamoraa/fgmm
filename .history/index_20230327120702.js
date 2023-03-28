const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");


const app = express();
const PORT = 8000;

const credentials = {
  apiKey: "c0cb33c561019e12e552b9b2e5b266fd8cbf3690b8739846e57d18edd939dd21",
  username: "FGM23",
};
const AfricasTalking = require("africastalking")(credentials);
const sms = AfricasTalking.SMS;





// const user = require("./model/user");

// const database_url = "mongodb://localhost:27017/ussd";
// mongoose.connect(database_url);
// const db = mongoose.connection;
// db.on("error", (err) => console.log(err));
// db.once("open", () => console.log("Database connected"));


 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));


app.post("/", (req, res) => {
  const { sessionId, phoneNumber, text } = req.body;
  let response = "";

  if (text === "") {
    console.log(text);
    // This is the first request. Note how we start the response with CON
    response = `CON What would you like to do
        1. Report FGM
        2. Learn about FGM`;
  } else if (text === "1") {
    // Business logic for first level response
    response = `CON Choose how you want to report
        1. call
        2. text`;
  } else if (text === "2") {
    response = `CON what do you want to learn
        1. What is FGM
        2. Types of FGM
        3. Effects of FGM
        4. Why practice FGM
        5. Alternatives`;

    console.log("ww");
  } else if (text === "1*1") {
    // This is a second level response where the user selected 1 in the first instance

    // This is a terminal request. Note how we start the response with END
    response = `END Please call this  number  `;
  } else if (text === "1*2") {
    response = `END please text this number`;
  } else if (text === "2*1") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message: "Hello world",
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about What is FGM shortly`;
  } else if (text === "2*2") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message: "Hello world",
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about types of FGM shortly`;
  } else if (text === "2*2") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message: "Hello world",
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about  of FGM shortly`;
  }

  // Print the response onto the page so that our gateway can read it
   res.set("Content-Type: text/plain");
   res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;