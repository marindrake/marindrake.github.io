import Hiking from 'hiking-start.js';

let hikes = new Hiking();

//const imgBasePath = "//byui-cit.github.io/cit261/examples/";
const imgBasePath = "examples/";
//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  hikes.showHikeList();
});