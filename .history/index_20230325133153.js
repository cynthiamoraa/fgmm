const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
    const{ na, email, password } = req.body;
}