const { REPL_MODE_SLOPPY } = require("repl");

const error = 'ERROR';
const warnning = 'WARNING';
const info = 'INFO';

function log(message,level=info){
	console.log(`${level}: ${message}`);
}

module.exports.error = error;
module.exports.warnning = warnning;
modeul.exports.info = info;
modeul.exports.log = log;

