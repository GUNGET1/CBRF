const http = require('http');
const soap = require('soap');

const cbrService = {
  DailyInfo: {
    DailyInfoSoap: {
      GetCursOnDateXML: function(args) {
        return {
          ValuteData: [
            { ValuteCode: 'R01010', Name: 'Австралийский доллар', Value: 16.0102 },
            { ValuteCode: 'R01090', Name: 'Белорусский рубль', Value: 18.4290 },
          ]
        };
      },
      GetCursDynamicXML: function(args) {
        return {
          ValuteDynamicData: [
            { Date: '01.03.2023', Value: 50.4031 },
            { Date: '02.03.2023', Value: 50.7946 },
          ]
        };
      },
      EnumValutesXML: function(args) {
        return {
          ValuteData: [
            { ValuteCode: 'R01010', Name: 'Австралийский доллар', Value: 16.0102 },
            { ValuteCode: 'R01090', Name: 'Белорусский рубль', Value: 18.4290 },
          ]
        };
      }
    }
  }
};

const wsdl = require('fs').readFileSync('cbrf.wsdl', 'utf8');

const server = http.createServer((request, response) => response.end('Err 400, not found'));

server.listen(3060);

soap.listen(server, '/cbrf', cbrService, wsdl, () =>
  console.log('SOAP-server created and workin!')
);