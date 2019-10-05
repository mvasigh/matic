const applescript = require('applescript');

applescript.execFile(
  './applescripts/example.applescript',
  (...args) => console.log(...args)
);
