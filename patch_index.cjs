const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

code = code.replace('<title>My Google AI Studio App</title>', '<title>MONETA CHAIN | Next Generation Blockchain Infrastructure</title>\n    <meta name="description" content="MONETA CHAIN is a decentralized blockchain ecosystem built for the future of secure, transparent, and borderless digital value exchange." />');
fs.writeFileSync('index.html', code);

let metadata = fs.readFileSync('metadata.json', 'utf8');
metadata = metadata.replace('"name": ""', '"name": "MONETA CHAIN"').replace('"name": "My App"', '"name": "MONETA CHAIN"');
fs.writeFileSync('metadata.json', metadata);
