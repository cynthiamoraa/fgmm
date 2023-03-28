const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
    const{ sessio, email, password } = req.body;
}