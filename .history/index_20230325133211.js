const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
    const{ sessionId, ser, password } = req.body;
}