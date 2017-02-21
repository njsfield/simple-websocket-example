// Global room class
class Room {

  constructor (roomname) {
    this.roomname = roomname;
    this.endpoints = {};
  }

  addEndpoint (endpointId) {
    this.endpoints[endpointId] = {
      name: '',
      permissions: 'chat',
      commsid: ''
    };
  }

  updateEndpointName (endpointId, name) {
    this.endpoints[endpointId].name = name;
  }

  updateEndpointPermissions (endpointId, permissions) {
    this.endpoints[endpointId].permissions = permissions;
  }

  updateEndpointCommsID (endpointId, commsid) {
    this.endpoints[endpointId].commsid = commsid;
  }
  removeEndpoint (endpointId) {
    delete this.endpoints[endpointId];
  }

  getRoomName (endpointId) {
    return this.roomname;
  }

  getEndpointNameFromCommsID (commsid) {
    var self = this;
    for (let props in self.endpoints) {
      if (self.endpoints[props].commsid === commsid) {
        return props;
      }
    }
  }

}

module.exports = Room;
