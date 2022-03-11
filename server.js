const express = require('express');
const app = express();
const path =require('path')

const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')

const hostname = 'locoalhost';
const port = 3000;

app.set('views', 'views')
app.set('view engine', 'hbs')

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.use('*', (req, res) => {
    res.status(404).render('404', {url: req.originalUrl})
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500');
});


app.listen(3000, () => {
    console.log(`Server running at http//${hostname}:${port}/`);
});