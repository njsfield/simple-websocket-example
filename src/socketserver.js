const comms = require('./socketrouter');

module.exports = (io) => {
  comms(io);
};
