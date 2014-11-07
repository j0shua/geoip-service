var geoip = require('geoip-lite'),
	validator = require('validator'),
	express = require('express'),
	app = express(),
	port = process.env.PORT;

function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization');
 
  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
}

// normalize i.e. put x-forwarded-for into req.ip if applicable
app.enable('trust proxy');

app.get('*', allowCrossDomain, function(req, res){
	var ip = req.query.ip || req.ip;

	if (!validator.isIP(ip)){
		res.status(400).send({ message: 'ERROR: invalid IP'});

	}

	res.status(200).send({
		ip: ip,
		geo: geoip.lookup(ip)
	});
});

app.listen(port, function(){
	console.log('app listening on %d', port);
})