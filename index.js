require('dotenv').config();
const ipinfo = require('./modules/geolocation.js');
const smee = require('./modules/smee.js');
const fs = require('fs');
const metadata = JSON.parse(fs.readFileSync('./pages/metadata.json', 'utf8'));
require('./serverhandler.js');
console.log('Metadata loaded: ' + JSON.stringify(metadata));
console.log('Hello world!');
