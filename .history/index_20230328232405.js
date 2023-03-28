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
let phoneNumber = "";


app.post("/", (req, res) => {
  const { sessionId, phoneNumber, text } = req.body;

  
  let response = "";
er;
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
        3. Why practice FGM
        4. Effects of FGM
        5. Medicalized FGM`;

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
     
      const options = {
        to: phoneNumber,
        message: 'Female genital mutilation is classified into 4 major types' + 
        'Type 1: This is the partial or total removal of the clitoral glands (the external and visible part of the clitoris, which is a sensitive part of the female genitals), and/or the prepuce/clitoral hood (the fold of skin surrounding the clitoral glans).' +
        'Type 2: This is the partial or total removal of the clitoral glans and the labia minora (the inner folds of the vulva), with or without removal of the labia majora (the outer folds of skin of the vulva).'+
        'Type 3: Also known as infibulation, this is the narrowing of the vaginal opening through the creation of a covering seal. The seal is formed by cutting and repositioning the labia minora, or labia majora, sometimes through stitching, with or without removal of the clitoral prepuce/clitoral hood and glans.'+
        'Type 4: This includes all other harmful procedures to the female genitalia for non-medical purposes, e.g., pricking, piercing, incising, scraping and cauterizing the genital area.',
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
        message:  'The reasons why FGM is performed vary from one region to another as well as over time and include a mix of sociocultural factors within families and communities.\n' + 
    '• Where FGM is a social convention (social norm), the social pressure to conform to what others do and have been doing, as well as the need to be accepted socially and the fear of being rejected by the community, are strong motivations to perpetuate the practice.\n' +
    '• FGM is often considered a necessary part of raising a girl, and a way to prepare her for adulthood and marriage. This can include controlling her sexuality to promote premarital virginity and marital fidelity.\n' +
    '• Some people believe that the practice has religious support, although no religious scripts prescribe the practice. Religious leaders take varying positions with regard to FGM, with some contributing to its abandonment.\n' ,
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
    response = `END you will receive an sms about WHY PEOPLE PRACTICE FGM shortly`;
  } else if (text === "2*4") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message: '    FGM harms girls and women in many ways. It involves removing and damaging healthy and normal female genital tissue, and it interferes with the natural functions of girls and womens bodies. \n' +
      'Immediate complications of FGM can include:'+
          '• severe pain\n ' +
          '• excessive bleeding (haemorrhage)\n ' +
          '• genital tissue swelling\n ' +
          '• fever\n ' +
          '• infections e.g., tetanus\n ' +
          '• urinary problems\n ' +
          '• wound healing problems\n ' +
          '• injury to surrounding genital tissue\n ' +
          '• shock\n '+
          '• death\n .'+
      'Long-term complications can include:\n'+
          '• urinary problems (painful urination, urinary tract infections);\n'+
          '• vaginal problems (discharge, itching, bacterial vaginosis and other infections);\n'+
          '• menstrual problems (painful menstruations, difficulty in passing menstrual blood, etc.);\n'+
          '• scar tissue and keloid;\n'+
          '• sexual problems (pain during intercourse, decreased satisfaction, etc.);\n'+
          '• increased risk of childbirth complications (difficult delivery, excessive bleeding, caesarean section, need to resuscitate the baby, etc.) and newborn deaths;\n'+
          '• need for later surgeries: for example, the sealing or narrowing of the vaginal opening (type 3) may lead to the practice of cutting open the sealed vagina later to allow for sexual intercourse and childbirth (deinfibulation). Sometimes genital tissue is stitched again several times, including after childbirth, hence the woman goes through repeated opening and closing procedures, further increasing both immediate and long-term risks; and\n'+
          '• psychological problems (depression, anxiety, post-traumatic stress disorder, low self-esteem, etc.).\n',
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
        message: "h",
    //     message: 'There are many reasons why health-care providers perform FGM. These include:\n' +
    // '• the belief that there is reduced risk of complications associated with medicalized FGM as compared to non-medicalized FGM; \n' +
    // '• the belief that medicalization of FGM could be a first step towards full abandonment of the practice;\n' +
    // '• health care providers who perform FGM are themselves members of FGM- practising communities and are subject to the same social norms; and \n' +
    // '• there may be a financial incentive to perform the practice.\n' ,
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
    response = `END you will receive an sms about WHAT IS MEDICALIZED FGM shortly`;
  }

  // Print the response onto the page so that our gateway can read it
   res.set("Content-Type: text/plain");
   res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;