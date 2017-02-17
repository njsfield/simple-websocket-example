// Simply sends message to register
function clientRegister (comms, output, cb) {
  const app = 'CLIENT';
  const method = 'REGISTER';
  const to = 'SYSTEM';
  comms.registerHandler(app, method, (comms, from, message) => {
    output.appendChild(elt('p', message));
    if (comms.endpointid !== from) {
      comms.addExternalEndpoint(from);
    }
    cb();
  });
  comms.send(app, method, to, 'Let me join this room');
}
