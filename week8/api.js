async function getPeople(url) {
    let swlist = document.querySelector("#swlist");
    swlist.innerHTML = "";

    let response = await SWAPI(url);

    //    console.log("response => " +JSON.stringify(response));

    response.results.forEach(element => {
        //  console.log(element.name);
        //  console.log(element.url);
        //swlist.innerHTML += `<li><a href="${element.url}">${element.name}</a></li>`;

        let swperson = document.createElement("li");
        swperson.innerHTML = `<a href="${element.url}">${element.name}</a>`;
        swperson.addEventListener("click", (event) => {
            event.preventDefault();
            getPerson(element.url);
        });

        swlist.appendChild(swperson);
    });

    if (response.next) {
        console.log("hit next");
        document.querySelector("#next").onclick = () => {
            getPeople(response.next)
        };
        document.querySelector("#next").hidden = false;
    } else {
        document.querySelector("#next").hidden = true;
    }


    if (response.previous) {
        console.log("hit previous");
        document.querySelector("#previous").onclick = () => {
            getPeople(response.previous)
        };
        document.querySelector("#previous").hidden = false;
    } else {
        document.querySelector("#previous").hidden = true;
    }


}

async function getPerson(url) {
    let personlist = document.querySelector("#personlist");
    //    swlist.innerHTML = "";

    let response = await SWAPI(url);

    //    console.log(response);
    personlist.innerHTML = `<li>Name: ${response.name} <br>  Age: ${response.birth_year} <br> Gender: ${response.gender} <br> Height: ${response.height} <br>  Mass: ${response.mass} <br>  Eye Color: ${response.eye_color} <br> Hair Color: ${response.hair_color}</li>`;

}

function SWAPI(url) {
    //    console.log("in SWAPI");

    return fetch(url).then((response) => {
        return response.json()
    });

}


getPeople("https://swapi.dev/api/people")