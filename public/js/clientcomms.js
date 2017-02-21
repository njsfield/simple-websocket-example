// Global endpoints
Comms.endpoints = {};

// Main comms class
class Comms {

  constructor (roomId, endpointId) {
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

  registerHandler (app, method, cb) {
    this.handlers[`${app}.${method}`] = cb;
  }
  addExternalEndpoint (endpoint) {
    this.externalendpoints.add(endpoint);
  }

  send (app, method, to, params) {
    this.ws.emit('message', JSON.stringify({
      roomId: this.roomId,
      from: this.endpointid,
      to: to,
      app: app,
      method: method,
      params: params
    }));
  }

}

// Get endpoint Id (useful when client has multiple endpoints)
Comms.getEndPointID = (endpointId) => Comms.endpoints[endpointId];
