function onCalculateButtonClick(){

let fname = document.forms["myForm"]["yourname"].value;
let sname = document.forms["myForm"]["yourcrush"].value;
const apiURL = "https://love-calculator.p.rapidapi.com/getPercentage?fname=" + fname + "&sname=" + sname
	
fetch(apiURL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "287ea89645msh92ef8f80b2c3d85p180b15jsn6b84b278d580",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
	}
})

.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  
  document.getElementById('percentage').textContent = jsObject.percentage;
  document.getElementById('result').textContent = jsObject.result;
});
}