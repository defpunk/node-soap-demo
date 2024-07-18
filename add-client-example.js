//from https://www.geeksforgeeks.org/how-to-perform-soap-requests-with-node-js/
const soap = require("soap");

const url = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url,
	function (err, client) {
		if (err) {
			console.error(err);
		} else {
			// Make SOAP request using client object
			const args =
			{
				intA: 2,
				intB: 3
			};
			client.Add(args,
				function (err, result) {
					if (err) {
						console.error(err);
					} else {
						console.log(result);
					}
				});
		}
	});
