const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
        // Create HTML elements as variables
        let card = document.createElement('section');
        let carddiv = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');
        //CLASS
        card.setAttribute('class', 'townsection');
        h2.setAttribute('class', 'townname');
        h3.setAttribute('class', 'townmotto');
        year.setAttribute('class', 'towninfo');
        population.setAttribute('class', 'towninfo');
        rainfall.setAttribute('class', 'towninfo');
        image.setAttribute('class', 'townphoto');
        //Assign variables content from JSON
        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        year.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].currentPopulation;
        rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
        //IMAGES
        image.setAttribute('src', "images/" + towns[i].photo);
        image.setAttribute('alt', "picture of: " + h2.textContent);
        //Append HTML items
        carddiv.appendChild(h2);
        carddiv.appendChild(h3);
        carddiv.appendChild(year);
        carddiv.appendChild(population);
        carddiv.appendChild(rainfall);
        card.appendChild(carddiv);
        card.appendChild(image);
        //Commit to DOM
        document.querySelector('div.cards').appendChild(card);
      }
    }
  });