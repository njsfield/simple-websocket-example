const Room = (roomname) => {
  this.roomname = roomname;
  this.endpoints = {};
};

// Add Endpoint
Room.prototype.addEndpoint = (endpointId) => {
  this.endpoints[endpointId] = {
    name: '',
    permissions: [],
    commsid: ''
  };
};

// Update Endpoint Name
Room.prototype.updateEndpointName = (endpointId, name) => {
  this.endpoints[endpointId].name = name;
};

// Update Endpoint Permissions
Room.prototype.updateEndpointPermissions = (endpointId, permissions) => {
  this.endpoints[endpointId].permissions = permissions;
};

// Update Endpoint comms ID
Room.prototype.updateEndpointCommsId = (endpointId, commsid) => {
  this.endpoints[endpointId].commsid = commsid;
};

// Remove Endpoint
Room.prototype.removeEndpoint = (endpointId) => {
  delete this.endpoints[endpointId];
};

// Get Roomname
Room.prototype.getRoomName = (endpointId) => {
  return this.roomname;
};
