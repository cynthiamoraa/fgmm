const express = require("express");
const bodyParser = require("body-parser");
const ussdRouter = require("./routes/ussd");

const app = express();
const PORT = 8000;
