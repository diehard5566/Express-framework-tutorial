const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/broken', (req, res) => {
    throw new Error('Broken!');
});

module.exports = router;