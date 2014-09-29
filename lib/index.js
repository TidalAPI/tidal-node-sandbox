var Sandbox = require('sandbox');
var sandbox = new Sandbox();

module.exports = exports = function(input, cb) {
    sandbox.run(input, function(output) {
        cb(output.result);
    });
}
