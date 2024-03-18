var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';

soap.createClient(url, function(err, client) {
    if(err) return console.log(err);

    client.Multiply({intA: 30, intB: 2}, function(err, result) {
        if(err) return console.log(err);
        console.log(result.MultiplyResult);
    });
});

