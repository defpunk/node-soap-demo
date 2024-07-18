const express = require('express');
const bodyParser = require('body-parser');
const soap = require('soap');
const fs = require('fs');
const app = express();
const port = 8000;

app.use(bodyParser.raw({ type: () => true, limit: '5mb' }));

const service = {
  Hello_Service: {
    Hello_Port: {
      sayHello: function (args) {
        return {
          greeting: `Hello, ${args.firstName}!`
        };
      }
    }
  }
};

const wsdl = fs.readFileSync('hello.wsdl', 'utf8');

app.listen(port, () => {
  soap.listen(app, '/helloService', service, wsdl);
  console.log(`SOAP server listening on port ${port}`);
});

