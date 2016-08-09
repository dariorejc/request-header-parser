var express = require('express');
var app = express();

app.get('/', function(req, res) {
    
    var ip = req.headers['x-forwarded-for'];
    var language = req.headers['accept-language'].split(',')[0];
    var software = req.headers['user-agent'].split(/\(([^)]+)\)/)[1];
    
    res.send({"ipaddress": ip, "language": language, "software": software});
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Request header parser app listening on port 8080!');
});
