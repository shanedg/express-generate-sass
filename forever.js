var forever = require('forever-monitor');
var pwd = process.cwd();

var child = new (forever.Monitor)('./bin/www', {
  'cwd': pwd,
  'killTree': true,
  'logFile': 'logs/log',
  'outFile': 'logs/out',
  'errFile': 'logs/error',
  'minUptime': 500,
  'spinSleepTime': 1000,
  'silent': false,
  'sourceDir': pwd,
  'watch': true,
  'watchDirectory': pwd,
  'watchIgnoreDotFiles': true,
  'watchIgnorePatterns': [
    'forever.js',
  ],

});

child.on('start', function() {
  console.log('forever start');
});

child.on('restart', function() {
  console.log(`forever restart #${child.times}`);
});

child.on('watch:restart', function(info) {
  console.log('forever watch:restart', info.stat, info.file);
});

child.start();
