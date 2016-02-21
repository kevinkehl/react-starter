var server = require('pushstate-server');

server.start({
  port: process.env.PORT || 3000,
  directories: [
    './public',
    './dist',
  ],
});
