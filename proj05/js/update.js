var output = new Date(document.lastModified);
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let Modifieddate = days[output.getDay()] + ", " + output.getDate() + " " + months[output.getMonth()] + " " + output.getFullYear() + ".";

document.getElementById("lastup").innerHTML = Modifieddate;