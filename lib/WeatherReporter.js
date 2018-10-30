function WeatherReporter() {
}

WeatherReporter.prototype.isStormy = function() {
    return (1 + Math.floor(Math.random() * 6)) > 4;
};

module.exports = WeatherReporter;