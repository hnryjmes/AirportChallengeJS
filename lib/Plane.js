function Plane() {
    this.flying = true;
}

Plane.prototype.takeOff = function() {
    if (this.flying) {
        throw "Plane cannot take off: plane already flying";
    }
};

Plane.prototype.land = function(airport) {
    if (this._landed) {
        throw "Plane cannot land: plane already landed"
    }
    this.flying = false;
    this.airport = airport;
};

Plane.prototype.airport = function() {
    if (this.flying) {
        throw "Plane cannot be at an airport: plane already flying"
    }
    return this.airport;
};

Plane.prototype._landed = function() {
    return !this.flying;
};

module.exports = Plane;
