const path = require('path');

result = {}

result.entry = {
    'main': path.join(__dirname, '../src/main.js'),
}

result.pages = [
    { chunks: ['main'], page: 'index.html', template: path.join(__dirname, '../src/index.html'), },
]

module.exports = result;