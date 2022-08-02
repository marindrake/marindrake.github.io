var whatdate  = new Date();

if (whatdate.getDay() == 5 ) {
  document.querySelector("aside").style.display = "block";
} else {
  document.querySelector("aside").style.display = "none";
}