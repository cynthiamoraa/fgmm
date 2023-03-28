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
    // Set your app credentials
    const makeCall = require("../node2");

    makeCall(); // logs "Hello from project1!"

    response = `END Please call this  number  `;
  } else if (text === "1*2") {
    response = `END please text this number`;
  } else if (text === "2*1") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message:
          "Female genital mutilation (FGM) comprises all procedures that involve partial or total removal of the external female genitalia, or other injury to the female genital organs",
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
        message: "Female genital mutilation is classified into 4 major types:/nType 1:This is the partial or total removal of the clitoral glands (the external and visible part of the clitoris, which is a sensitive part of the female genitals), and/or the prepuce/clitoral hood (the fold of skin surrounding the clitoral glans).   Type 2: This is the partial or total removal of the clitoral glans and the labia minora (the inner folds of the vulva), with or without removal of the labia majora (the outer folds of skin of the vulva).
        Type 3: Also known as infibulation, this is the narrowing of the vaginal opening through the creation of a covering seal. The seal is formed by cutting and repositioning the labia minora, or labia majora, sometimes through stitching, with or without removal of the clitoral prepuce/clitoral hood and glans.
        Type 4: This includes all other harmful procedures to the female genitalia for non-medical purposes, e.g., pricking, piercing, incising, scraping and cauterizing the genital area.",
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
    response = `END you will receive an sms about Types of FGM shortly`;
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