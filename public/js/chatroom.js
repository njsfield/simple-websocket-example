// Append a paragraph element to output
const appendP = (output, comms, from, message) => {
  output.appendChild(elt('p', from + ' : ' + message));
};

// Simply sends message to register
const chatRoom = (comms, input, output, submit) => {
  const app = 'CHATROOM';
  const sys = 'SYSTEM';

  comms.send(app, 'REGISTER', sys, 'JOINED');
  // Register
  comms.registerHandler(app, 'REGISTER', appendP.bind(null, output));
  // Receive Message
  comms.registerHandler(app, 'MESSAGE', appendP.bind(null, output));
  // Receive Disconnect
  comms.registerHandler(app, 'DISCONNECT', appendP.bind(null, output));
  // Send (click submit)
  submit.addEventListener('click', () => {
    if (input.value) {
      comms.send(app, 'MESSAGE', sys, input.value);
      input.value = '';
    }
  });
  // Send (enter)
  input.addEventListener('keydown', function (e) {
    if (e.which == 13 && input.value) {
      comms.send(app, 'MESSAGE', sys, input.value);
      input.value = '';
    }
  });
};
