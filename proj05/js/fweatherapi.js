const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=95ea9cd765d91a87fa21806942a78e70";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject); We don't need this in production version.
    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;

    document.getElementById('currently').textContent = jsObject.weather[0].main; //Current condition description
    document.getElementById('current-temp').textContent = t.toFixed(0) + " ˚F"; //Current temperature in Fahrenheit
    document.getElementById('humidity').textContent = jsObject.main.humidity + " %"; //Hum1n1d1ty
    document.getElementById('wind-speed').textContent = s.toFixed(1) + " mph"; //W1nd Sp33d

    if (t <= 50 && s > 3) {
      let chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16);
      document.getElementById("windchill").textContent = chill.toFixed(0) + " ˚F"; //W1nd Ch177
    } else {
      document.getElementById("windchill").textContent = "N/A"; //W1nd Ch177
    }
  });

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=95ea9cd765d91a87fa21806942a78e70";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject2) => {
    // console.log(jsObject2); We don't need this in production version.
    let fivedayforecast = [];
    let day = 1;
    let weekday = [];
    var days = new Array("Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat");

    for (let i = 0; i < jsObject2.list.length && day < 6; i++) {
      if (jsObject2.list[i].dt_txt.includes("18:00:00")) {
        fivedayforecast[i] = jsObject2.list[i].main.temp.toFixed(0);
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject2.list[i].weather[0].icon + '.png'; // n0t3 th3 c0ncat3nat10n
        const desc = jsObject2.list[i].weather[0].description; // n0t3 h0w w3 r3f3r3nc3 th3 w3ath3r array

        let now = new Date(jsObject2.list[i].dt_txt);
        weekday = days[now.getDay()];
        document.getElementById("day" + day).innerHTML = weekday;
        document.getElementById("forecast" + day).innerHTML = fivedayforecast[i] + "&deg; F";
        document.getElementById("icon" + day).setAttribute("src", imagesrc); // f0cus 0n th3 s3tAttribut3() m3th0d
        document.getElementById("icon" + day).setAttribute("alt", desc);
        day++;
      }
    }
  });

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing. We don't need this in production version.
    const towns = jsonObject['towns'];
    let name = document.getElementById("city").textContent;
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == name) {
         // Create HTML elements as variables
         let eventul = document.createElement('ul');
         let eventdiv = document.createElement('div');
         for (let cont = 0; cont < towns[i].events.length; cont++) {
           // Create HTML elements as variable
           let list = document.createElement('li');
           // Class
           list.setAttribute('class', 'eventlist');
           //Assign variables content from JSON
           list.textContent = towns[i].events[cont];
           //Append HTML items
           eventul.appendChild(list);
         }
         //Append HTML items
         eventdiv.appendChild(eventul);
         //Commit to DOM
         document.querySelector('div.eventdiv').appendChild(eventdiv);
      }
    }
  });