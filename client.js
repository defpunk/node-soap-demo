const soap = require('soap');
const url = 'http://localhost:8000/helloService?wsdl';

const args = { firstName: 'John' };

soap.createClient(url, function (err, client) {
  if (err) throw err;
  client.sayHello(args, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

