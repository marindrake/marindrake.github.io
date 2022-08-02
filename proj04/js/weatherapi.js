const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83549,us&units=imperial&APPID=95ea9cd765d91a87fa21806942a78e70";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;

    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('current-temp').textContent = t.toFixed(0) + " ˚F";
    document.getElementById('humidity').textContent = jsObject.main.humidity + " %";
    document.getElementById('wind-speed').textContent = s.toFixed(1) + " mph";

    if (t <= 50 && s > 3) {
      let chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16);
      document.getElementById("windchill").textContent = chill.toFixed(0) + " ˚F";
    } else {
      document.getElementById("windchill").textContent = "N/A";
    }

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('wicon').setAttribute('src', imagesrc);
    document.getElementById('wicon').setAttribute('alt', desc);
  });