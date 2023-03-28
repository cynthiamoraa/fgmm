const express = require("express");
const bodyParser = require("body-parser");
const ussdRouter = require("./index");

const app = express();
const PORT = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use("/", ussdRouter);
