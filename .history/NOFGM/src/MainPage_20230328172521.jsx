import React from 'react'
import { FcCellPhone } from 'react-icons/fc'
import { CgDanger } from 'react-icons/cg'
import { FaChild } from 'react-icons/fa'

const MainPage = () => {
  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
        <div className="rounded-sm bg-slate-200 w-[350px] md:w-[200px] lg:w-[400px] h-[120px]  border-l-8 border-l-sky-500 p-4">
          <FcCellPhone />
          <p>ussd dials</p>
          <span className="font-bold text-3xl bottom">1700</span>
        </div>
        <div className="rounded-sm bg-slate-200 w-[350px] md:w-[200px] lg:w-[400px] h-[120px]  border-l-8 border-l-sky-500 p-4">
          <CgDanger />
          <p>reported cases</p>
          <span className="font-bold text-3xl bottom">1700</span>
        </div>
        <div className="rounded-sm bg-slate-200 w-[350px] md:w-[200px] lg:w-[400px] h-[120px]  border-l-8 border-l-sky-500 p-4">
          <FaChild />
          <p>rescured victims</p>
          <span className="font-bold text-3xl bottom">1700</span>
        </div>
      </div>
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
  const { sessionId, phoneNumber, text } = req.body;}
    </div>
  );
}

export default MainPage