const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
    const{ sessionId, serviceCode, phoneNumber, text } = req.body;
    console.log('###########',req.body);
    let response = 'my account number is 1234567890';
})