// Simply sends message to register
const clientRegister = (comms, output, cb) => {
  const app = 'CLIENT';
  const method = 'REGISTER';
  const to = 'SYSTEM';
  comms.registerHandler(app, method, (comms, from, message) => {
    output.appendChild(elt('b', from + ' joined the chat room'));
    output.appendChild(elt('br'));
    if (comms.endpointid !== from) {
      comms.addExternalEndpoint(from);
    }
    cb();
  });
  comms.send(app, method, to, 'Let me join this room');
};
