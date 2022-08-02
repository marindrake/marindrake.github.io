const requestURL = 'data/guide.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const team = jsonObject['team'];

    for (let i = 0; i < team.length; i++) {
        // Create HTML elements as variables
        let card = document.createElement('section');
        let carddiv = document.createElement('div');
        let h2 = document.createElement('h2');
        let bio = document.createElement('h3');
        let email = document.createElement('p');
        let years = document.createElement('p');
        let level = document.createElement('p');
        let image = document.createElement('img');
        //CLASS
        card.setAttribute('class', 'teamsection');
        h2.setAttribute('class', 'teamname');
        bio.setAttribute('class', 'teambio');
        email.setAttribute('class', 'teaminfo');
        years.setAttribute('class', 'teaminfo');
        level.setAttribute('class', 'teaminfo');
        image.setAttribute('class', 'teamphoto');
        //Assign variables content from JSON
        h2.textContent = team[i].name;
        bio.textContent = team[i].biography;
        email.textContent = "Email: " + team[i].email;
        years.textContent = "Years of experience: " + team[i].years;
        level.textContent = "Certification level: " + team[i].level;
        //IMAGES
        image.setAttribute('src', "images/" + team[i].photo);
        image.setAttribute('alt', "picture of: " + h2.textContent);
        //Append HTML items
        card.appendChild(image);
        carddiv.appendChild(h2);
        carddiv.appendChild(email);
        carddiv.appendChild(years);
        carddiv.appendChild(level);
        carddiv.appendChild(bio);
        card.appendChild(carddiv);
        //Commit to DOM
        document.querySelector('div.cards').appendChild(card);
    }
  });