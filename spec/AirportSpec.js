describe("Airport", function() {
  var Airport = require('../lib/Airport');
  var Plane = require('../lib/Plane');
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("should be able to land a Plane", function() {
    airport.land(plane);
    expect(airport.currentPlane).toEqual(plane);
    expect(airport.hasLanded).toEqual(true);
  });
});