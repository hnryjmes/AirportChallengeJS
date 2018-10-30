describe("Plane", function() {
    var Plane = require('../lib/Plane');
    var plane;
    var airport;

    beforeEach(function() {
        plane = new Plane();
        airport = jasmine.createSpy('airport');
    });

    describe("#takeOff", function() {
        it("raises an error if already flying", function() {
            expect(plane.takeOff()).toThrow("Plane cannot take off: plane already flying");
        });
    });

    describe("#land", function() {
        it("stores the airport the plane landed at", function() {
            plane.land(airport);
            expect(plane.airport()).toEqual(airport);
        });

        it("raises an error if already landed", function() {
            plane.land(airport);
            expect(plane.land(airport)).toThrow("Plane cannot land: plane already landed");
        });
    });

    describe("#airport", function() {
        it("raises an error if already flying", function() {
            expect(plane.airport()).toThrow("Plane cannot be at an airport: plane already flying");
        });
    });
});
