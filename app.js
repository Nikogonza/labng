const express = require('express');
const app = express();

app.use(express.static(__dirname +'/public'));

app.get('/',(req,res) => {
	return res.sendFile(--dirname + '/public/index.hmtl');
});

app.get('/*', (req, res) => {
	return res.redirect('/');
});

module.exports = app;
