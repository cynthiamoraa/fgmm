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
      response = `CON Choose how you want to report
        1. call
        2. text`;
    function sendSms (){
      console.log("wwwww")
      const options = {
        to: phoneNumber,
        message: "Hello world",
      }
      sms.send(options)
        .then((response)=> {
          console.log(response)})
        .catch((error)=>{
          console.log(error)});
    }
    sendSms();
      
       // Business logic for first level response
    // This is a terminal request. Note how we start the response with END
    response = `END Your phone number is ${phoneNumber}`;
    console.log("ww")

  } else if (text === "1*1") {
    // This is a second level response where the user selected 1 in the first instance
    const accountNumber = "ACC100101";
    // This is a terminal request. Note how we start the response with END
    response = `END Your account number is ${accountNumber}`;
  } else if (text === "1*2") {
    // This is a second level response where the user selected 1 in the first instance
    const balance = "KES 10,000";
   
    // This is a terminal request. Note how we start the response with END
    response = `END Your balance is ${balance}`;
  }

  // Print the response onto the page so that our gateway can read it
   res.set("Content-Type: text/plain");
   res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;