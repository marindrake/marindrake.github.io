// Example of using Classes and modules to organize the code needed to render our list of hikes. Not using MVC here.

//create an array of hikes
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "teton-canyon.jpg",
      imgAlt: "Image of Teton Canyon",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Denanda Falls",
      imgSrc: "denanda-falls.jpg",
      imgAlt: "Image of Denanda Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];
  
  const imgBasePath = "examples";
  //on load grab the array and insert it into the page on load
  
  class Hiking {
    showHikeList() {
      const hikeListElement = document.getElementById("hikes");
      hikeListElement.innerHTML = "";
      this.renderHikeList(hikeList, hikeListElement);
    }
  
    renderHikeList(hikes, parent) {
      hikes.forEach(hike => {
        parent.appendChild(this.renderOneHike(hike));
      });
    }
  
    renderOneHike(hike) {
      const item = document.createElement("li");
  
      item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.directions}</p>
                  </div>                
          </div>`;
  
      return item;
    }
  }
  
  let hikes = new Hiking();
  //const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  const imgBasePath = "examples/";
  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    hikes.showHikeList();
  });
  