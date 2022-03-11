const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({name: 'This tutorial', websit: 'https//:tuture.co'});
});

router.post('/new', (req, res) => {
    res.status(201).json( {msg: 'new beggins'})
});

module.exports = router