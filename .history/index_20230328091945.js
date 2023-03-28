const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const http = require("http");
const url = require("url");


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
const sessionId = req.body.sessionId;
  const isActive = req.body.isActive;
  const phoneNumber = req.body.phoneNumber;

  if (isActive == 1) {
    // Dial a new call using the voice API
    const options = {
      to: phoneNumber,
      from: 'YOUR_AFRICAS_TALKING_PHONE_NUMBER',
      url: 'http://www.example.com/call.xml',
      method: 'POST',
      accept: 'application/xml',
      contentType: 'application/xml',
      recordingEnabled: true,
      recordingFormat: 'mp3'
    };

    africastalking.Voice.call(options)
      .then(response => {
        console.log(response);
        res.status(200).send(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  } else {
    // Read in call details (duration, cost). This flag is set once the call is completed.
    // Note that the gateway does not expect a response in this case
    const duration = req.body.durationInSeconds;
    const currencyCode = req.body.currencyCode;
    const amount = req.body.amount;

    // You can then store this information in the database for your records
  }





    response = "END Please listen to our awesome record ${mp3Url}"

    console.log("yyyiiii");
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
  } else if (text === "2*3") {
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
    response = `END you will receive an sms about Effects of FGM shortly`;
  } else if (text === "2*4") {
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
    response = `END you will receive an sms about Effects of FGM shortly`;
  } else if (text === "2*5") {
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
    response = `END you will receive an sms about Effects of FGM shortly`;
  }

  // Print the response onto the page so that our gateway can read it
   res.set("Content-Type: text/plain");
   res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;