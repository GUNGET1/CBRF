const soap = require('soap');
const url = 'http://localhost:3060/cbrf?wsdl';

soap.createClient(url, (err, client) => {
  if (err) console.log("SOAP-client err: ", err);

  if (client) {
    client.EnumValutesXML({ Seld: false }, (err, result, rawResponse, soapHeader, rawRequest) => {
      if (err) console.log("EnumValutesXML call err: ", err);

      console.log("Result: ", result);
    });
  }
});