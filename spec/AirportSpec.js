describe("Airport", function() {
  var Plane = require('../lib/Plane');
  var WeatherReporter = require('../lib/WeatherReporter');
  var Airport = require('../lib/Airport');
  var plane;
  var weatherReporter;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    weatherReporter = new WeatherReporter();
    airport = new Airport(weatherReporter, 20);
  });

  describe("#land", function() {
    describe("when not stormy", function() {
      beforeEach(function() {
        spyOn(weatherReporter, 'isStormy').and.returnValue(false);
      });

      it("instructs a plane to land", function() {
        spyOn(plane, 'land');
        expect(plane.land).toHaveBeenCalled();
        airport.land(plane);
      });
    });

    describe("when full", function() {
      it("raises an error", function() {
        for (var i = 0; i < 20; i++) {
          airport.land(plane);
        }
        expect(airport.land(plane)).toThrow("Cannot land plane: airport full");
      });
    });

    describe("when stormy", function() {
      beforeEach(function() {
        spyOn(weatherReporter, 'isStormy').and.returnValue(true);
      });
      it("raises an error", function() {
        expect(airport.land(plane)).toThrow("Cannot land plane: weather is stormy");
      });
    });
  });

  describe("#take_off", function() {
    describe("when not stormy", function() {
      beforeEach(function() {
        spyOn(weatherReporter, 'isStormy').and.returnValue(false);
      });
      it("instructs a plane to take off", function() {
        airport.land(plane);
        spyOn(plane, 'takeOff');
        expect(plane.takeOff).toHaveBeenCalled();
        airport.takeOff(plane);
      });
      it("returns the plane that took off", function() {
        airport.land(plane);
        expect(airport.takeOff(plane)).toEqual(plane);
      });
      it("raises an error if plane is not at this airport", function() {
        otherAirport = new Airport(weatherReporter, 20);
        otherAirport.land(plane);
        expect(airport.takeOff(plane)).toThrow("Cannot take off plane: plane not at this airport");
      });
    });
    
    describe("when stormy", function() {
      beforeEach(function() {
        spyOn(weatherReporter, 'isStormy').and.returnValue(true);
      });

      it("raises an error", function() {
        expect(airport.takeOff(plane)).toThrow("Cannot take off plane: weather is stormy");
      });
    });
  });

  describe("#planes", function() {
    beforeEach(function() {
      spyOn(weatherReporter, 'isStormy').and.returnValue(false);
    });

    it("returns planes at the airport", function() {
      airport.land(plane);
      expect(airport.planes().includes(plane)).toBe(true);
    });

    it("does not return planes that have taken off", function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes().includes(plane)).toBe(false);
    });
  });

  describe("defaults", function() {
    beforeEach(function() {
      var defaultAirport = new Airport(weatherReporter);
    });

    it("has a default capacity", function() {
      spyOn(weatherReporter, 'isStormy').and.returnValue(false);
      var capacity = airport.DEFAULT_CAPACITY;
      for (var i = 0; i < capacity; i++) {
        defaultAirport.land(plane);
      }
      expect(defaultAirport.land(plane)).toThrow("Cannot land plane: airport full");
    });
  });
});