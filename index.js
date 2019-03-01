const express = require('express');
const app = express();

app.get('/index', (req, res) => res.render('index.ejs'));
app.get('/page', (req, res) => res.render('page.ejs'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));