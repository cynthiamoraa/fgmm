const express = require('express');
const ussdRoute = require('./index');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use(bodyParser.json());

