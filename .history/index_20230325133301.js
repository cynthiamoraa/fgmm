const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
    const{ sessionId, serviceCode, phoneNumber, text } = req.body;

}