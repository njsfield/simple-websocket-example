// Simply sends message to register
function chatMessage (comms, input, output, submit) {
  const app = 'CHATROOM';
  const method = 'MESSAGE';
  const to = 'SYSTEM';
  // Receive
  comms.registerHandler(app, method, (comms, from, message) => {
    output.appendChild(elt('p', from + ': ' + message));
  });
  // Send (click submit)
  submit.addEventListener('click', () => {
    if (input.value) {
      comms.send(app, method, to, input.value);
      // Reset Input
      input.value = '';
    }
  });
  // Send (enter)
  input.addEventListener('keydown', function (e) {
    if (e.which == 13 && input.value) {
      comms.send(app, method, to, input.value);
      input.value = '';
    }
  });
}
