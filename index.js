const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const arr = [];

app.use(bodyParser.urlencoded({extended: true}));

app.get('/index', (req, res) => res.render('index.ejs', { arr: arr }));
app.get('/page', (req, res) => res.render('page.ejs'));
app.post('/page', (req, res) => {
    arr.push(req.body.firstInput);
    res.redirect('/index');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));