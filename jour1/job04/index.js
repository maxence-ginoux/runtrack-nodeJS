const folders = require('fs').readdirSync('.').filter(file => require('fs').statSync(file).isDirectory());

console.log(folders);
