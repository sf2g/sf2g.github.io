const SSI = require('ssi');
const path = require('path');

const inputDir = path.join(__dirname, 'src');
const outputDir = path.join(__dirname, 'dist');

const compiler = new SSI(inputDir, outputDir, '/**/*.html');
compiler.compile();
