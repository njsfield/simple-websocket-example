// Global room class
function Room (roomname) {
  this.roomname = roomname;
  this.endpoints = {};
}

// Add Endpoint
Room.prototype.addEndpoint = function (endpointId) {
  this.endpoints[endpointId] = {
    name: '',
    permissions: 'chat',
    commsid: ''
  };
};

// Update Endpoint Name
Room.prototype.updateEndpointName = function (endpointId, name) {
  this.endpoints[endpointId].name = name;
};

// Update Endpoint Permissions
Room.prototype.updateEndpointPermissions = function (endpointId, permissions) {
  this.endpoints[endpointId].permissions = permissions;
};

// Update Endpoint comms ID
Room.prototype.updateEndpointCommsID = function (endpointId, commsid) {
  this.endpoints[endpointId].commsid = commsid;
};

// Remove Endpoint
Room.prototype.removeEndpoint = function (endpointId) {
  delete this.endpoints[endpointId];
};

// Get Roomname
Room.prototype.getRoomName = function (endpointId) {
  return this.roomname;
};

module.exports = Room;
