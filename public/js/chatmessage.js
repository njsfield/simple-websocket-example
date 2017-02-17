// Simply sends message to register
function chatMessage (comms, input, output, submit) {
  const app = 'CHATROOM';
  const method = 'MESSAGE';
  const to = 'SYSTEM';
  // Receive
  comms.registerHandler(app, method, (comms, from, message) => {
    output.appendChild(elt('p', message));
  });
  // Send
  submit.addEventListener('click', () => {
    if (input.value) {
      comms.send(app, method, to, input.value);
      // Reset Input
      input.value = '';
    }
  });
}
