pm.test("Latitude and longitude are correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.coord.lat).to.eql(51.51);
    pm.expect(jsonData.coord.lon).to.eql(-0.13);
});

// Verify that the temperature value is within a certain range
pm.test("Temperature is within range", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.main.temp).to.be.within(270, 310); // temperature range in Kelvin
});

// Verify that the humidity value is within a certain range
pm.test("Humidity is within range", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.main.humidity).to.be.within(0, 100); // humidity range in percentage
});

// Verify that the wind speed value is within a certain range
pm.test("Wind speed is within range", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.wind.speed).to.be.within(0, 50); // wind speed range in meter/sec
});