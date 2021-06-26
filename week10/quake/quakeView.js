// Quake View handler
export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
        //build a list of the quakes...include the title and time of each quake then append the list to listElement. 
        console.log(quakeList)
        listElement.innerHTML = quakeList.features
            .map(quake => {
                return `<div class="earthquake">
                  <div class="quakeTitle">${quake.properties.title}</div>
                  <div class="quakeTime">${new Date(quake.properties.time)}</div>
                </div>`;
            })
            .join('');
    }
    renderQuake(quake, element) {
        const quakeProperties = Object.entries(quake.properties);
        // for the provided quake make a list of each of the properties associated with it. 
        element.innerHTML = quakeProperties
        .map(item => {
          if (item[0] === 'time' || item[0] === 'updated') {
            return `<li>${item[0]}: ${new Date(item[1])}</li>`;
          } else return `<li>${item[0]}: ${item[1]}</li>`;
        })
        .join('');    
    }
}