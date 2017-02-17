// Global endpoints
Comms.endpoints = {};

// Main comms class
function Comms (roomId, endpointId) {
  var self = this;
  this.endpointid = endpointId;
  this.externalendpoints = new Set();
  this.roomid = roomId;
  this.handlers = {};
  this.ws = io();

  this.ws.on('message', function (msg) {
    msg = JSON.parse(msg);
    self.handlers[msg.app + '.' + msg.method](self, msg.from, msg.params);
  });

  Comms.endpoints[this.endpointid] = this;
}

// Get endpoint Id (useful when client has multiple endpoints)
Comms.getEndPointID = function (endpointId) { // Get endpoints
  return Comms.endpoints[endpointId];
};

// To allow handler functions to be called when messages received
Comms.prototype.registerHandler = function (app, method, cb) {
  var fullName = app + '.' + method;
  this.handlers[fullName] = cb;
};

// Add external endpoint method
Comms.prototype.addExternalEndpoint = function (endpoint) {
  this.externalendpoints.add(endpoint);
};

// Generic Send Method
Comms.prototype.send = function (app, method, to, params) {
  this.ws.emit('message', JSON.stringify({
    roomId: this.roomId,
    from: this.endpointid,
    to: to,
    app: app,
    method: method,
    params: params
  }));
};
