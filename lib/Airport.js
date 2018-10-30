function Airport() {
}

Airport.prototype.land = function(plane) {
  this.currentPlane = plane;
  this.hasLanded = true;
};

module.exports = Airport;
