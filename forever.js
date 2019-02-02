var forever = require('forever-monitor');

var child = new (forever.Monitor)('./bin/www', {
  'killTree': true,
  'logFile': 'logs/log',
  'outFile': 'logs/out',
  'errFile': 'logs/error',
  'minUptime': 500,
  'spinSleepTime': 1000,
  'silent': false,
  'watch': true,
  'watchDirectory': '.',
  'watchIgnoreDotFiles': true,
});

child.on('start', function() {
  console.log('forever start');
});

child.start();
