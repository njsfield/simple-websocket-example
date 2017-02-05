# Simple Websocket Example

Demonstrates a simple use case for the [Node based ws library](https://github.com/websockets/ws).

### Steps

1. A simple http server is run at http://localhost:4000.
2. A WebSocket Server is run at ws://localhost:8000.
3. *index.html* is served at '/' route.
4. *index.html* includes two **input** elements.
5. When *index.html* loads for the client, a new **WebSocket** instance is created to connect at ws://localhost:8000
6. Several event handlers are set up; *onopen*, *onmessage*, *onclose*.
7. An **Event Listener** is attached to the first input element, which sends a message through the socket on input.
8. Server receives message via socket.
9. Server logs the message.
10. Server sends back message.
11. Clients *onmessage* event handler is called, and message is injected into second input element.


### Install

Clone
```
git clone git@github.com:njsfield/simple-websocket-example.git
```
Install dependencies
```
npm install
```
Start
```
npm start
```
