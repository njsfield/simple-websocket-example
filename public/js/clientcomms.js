// Global endpoint
Comms.endpoints = {};

// comms.js
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

// Get endpointId
Comms.getEndPointID = function (endpointId) { // Get endpoints
  return Comms.endpoints[endpointId];
};

// This function is called by wecrtc.js, av.js and chat.js when registering
Comms.prototype.registerHandler = function (app, method, cb) {
  var fullName = app + '.' + method;
  this.handlers[fullName] = cb;
};

// This function is called by wecrtc.js, av.js and chat.js when registering
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
