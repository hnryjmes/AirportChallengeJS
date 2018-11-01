function Airport(weatherReporter, capacity) {
  this.weatherReporter = weatherReporter;
  this.DEFAULT_CAPACITY = 20;
  this.capacity = capacity || this.DEFAULT_CAPACITY;
  this.planes = [];
}

Airport.prototype.planes = function() {
  return this.planes;
};

Airport.prototype.land = function(plane) {
  if (this._isFull()) {
    throw "Cannot land plane: airport full";
  }
  if (this._isStormy()) {
    throw "Cannot land plane: weather is stormy";
  }
  plane.land(this);
  this._addPlane(plane);
};

Airport.prototype.takeOff = function(plane) {
  if (this._isStormy()) {
    throw "Cannot take off plane: weather is stormy";
  }
  if (!this._isAtAirport(plane)) {
    throw "Cannot take off plane: plane not at this airport";
  }
  plane.takeOff();
  this._removePlane(plane);
  return plane;
};

Airport.prototype._capacity = function() {
  return this.capacity;
};

Airport.prototype._weatherReporter = function() {
  return this.weatherReporter;
};

Airport.prototype._isFull = function() {
  return (this.planes.length >= this.capacity);
};

Airport.prototype._isStormy = function() {
  return this.weatherReporter.isStormy();
};

Airport.prototype._isAtAirport = function(plane) {
  return this.planes.includes(plane);
};

Airport.prototype._addPlane = function(plane) {
  this.planes.push(plane);
  return this.planes;
};

Airport.prototype._removePlane = function(plane) {
  return this.planes.pop();
};

module.exports = Airport;
