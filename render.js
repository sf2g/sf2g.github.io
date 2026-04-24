const SSI = require('ssi');
const path = require('path');

const inputDir = path.join(__dirname, 'src').replace(/\\/g, '/');
const outputDir = path.join(__dirname, 'dist').replace(/\\/g, '/');

const compiler = new SSI(inputDir, outputDir, '/**/*.html');
compiler.compile();
