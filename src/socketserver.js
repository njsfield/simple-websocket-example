const comms = require('./servercomms');

module.exports = (io) => {
  io.on('connection', (ws) => {
    ws.on('message', (msg) => {
      comms(io, ws, msg);
    });
    ws.on('disconnect', () => {
      comms(io, ws, null);
    });
  });
};
