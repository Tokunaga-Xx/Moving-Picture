const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();


// Get All Pictures
router.get('/',(req, res) => {
    res.status(400).send(`You want to much, man.`);
});

// Get Single Pic
router.get('/:name', (req, res) => {
    // todo: if not jpg? png?
    fs.access(path.join(__dirname,`${req.params.name}.jpg`),(err) => {
        if(!err){
            res.sendFile(path.join(__dirname,`${req.params.name}.jpg`));
        }
        else {
            res.status(400).json({msg: `no this pic`});
        }
    })
});



module.exports = router;