const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
    const{ sessionI, email, password } = req.body;
}