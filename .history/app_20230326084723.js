const express = require('express');
const ussdRoute = require('./index');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended:false}))
app.use('/ussd',ussd)
app.use('*',(req,res)=> res.status(404))
