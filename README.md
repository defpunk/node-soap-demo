# node-soap-demo
Demo repo for exploring soap webservices

to see the SOAP webservice in action

1. run `npm i`
2. run `node server.js`
3. open `http://localhost:8000/helloService`
4. You can now access the service on http://localhost:8000/helloService?wsdl
5. Here's an example request you can send via postman


```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://www.examples.com/wsdl/HelloService.wsdl">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:sayHello>
         <firstName>David</firstName>
      </tns:sayHello>
   </soapenv:Body>
</soapenv:Envelope>
```

expected response is

```
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:tns="http://www.examples.com/wsdl/HelloService.wsdl">
    <soap:Body>
        <tns:sayHelloResponse>
            <tns:greeting>Hello, David!</tns:greeting>
        </tns:sayHelloResponse>
    </soap:Body>
</soap:Envelope>
```

in a second terminal run - node client.js
