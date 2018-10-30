describe("WeatherReporter", function() {
    var WeatherReporter = require('../lib/WeatherReporter');
    var weatherReporter;
  
    beforeEach(function() {
      weatherReporter = new WeatherReporter();
    });
  
    describe("#isStormy", function() {
        it("can be non-stormy", function() {
            spyOn(Math, 'random').and.returnValue(0.1);
            expect(weatherReporter.isStormy()).toEqual(false);
        });

        it("can be stormy", function() {
            spyOn(Math, 'random').and.returnValue(0.9);
            expect(weatherReporter.isStormy()).toEqual(true);
        });
    });

  });