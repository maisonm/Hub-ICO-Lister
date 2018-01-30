const express = require('express'),
    app = express(),
    fetch = require('node-fetch'),
    url = 'https://api.icowatchlist.com/public/v1/',
    port = 8000;

app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    fetch(url)
        .then(res => res.json())
        .then(data => res.render('pages/index', {
            ico: data.ico
        }))
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

app.use('/public', express.static('public'));

app.listen(port);
console.log('Magic is churning on ' + port);