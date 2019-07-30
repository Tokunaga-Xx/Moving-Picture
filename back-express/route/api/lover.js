const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'th.jpg'));
});

let lovers = [
    {
        name: 'liwenzhen',
        time: 'chuzhong',
    }
]

module.exports = router;