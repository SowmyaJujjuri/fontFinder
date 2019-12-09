var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

var fontData = require('./fontPairings.json');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get(fontData, function(req, res){
	res.render('./partials/output', {
		font: fontData[0].font,
		fontPairing: fontData[0].fontPairing
	});
});

app.get('/test', function(req, res){
	res.render('./partials/output', {
		font: fontData[0].font,
		fontPairing: fontData[0].fontPairing,
		displayFilter: true,
		displayModal: true
	});
});

app.get('/', function(req, res){
	var op = fontData[0];
	res.status(200).render('body', {
		output:op,
		font: fontData[0].font,
		fontPairing: fontData[0].fontPairing,
		displayFilter: true,
		displayModal: true
	});
	console.log(op);
});

app.get('/:n', function(req, res){
	var n = req.params.n;
	if(n >= 0 && n < 10){
		var op = fontData[n];
		res.status(200).render('body', {
			output:op,
			font: fontData[n].font,
			fontPairing: fontData[n].fontPairing,
			displayFilter: true,
			displayModal: true
		});
		console.log(op);
	}
	else{
		res.status(404).render('404');
	}
});

app.get('*', function(req, res){
	res.status(404).render('404');
});

app.listen(port, function(err){
	if(err){
		throw err;
	}
	console.log("Server listening on port ", port);
});
