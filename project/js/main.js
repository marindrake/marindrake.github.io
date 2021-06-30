fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "287ea89645msh92ef8f80b2c3d85p180b15jsn6b84b278d580",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});