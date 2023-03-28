const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
    const{ name, email, password } = req.body;
}