function calculate(){
	async function getPercentage(){
		let fname = document.forms["myForm"]["yourname"].value;
		let sname = document.forms["myForm"]["yourcrush"].value;
	
		const apiURL = "https://love-calculator.p.rapidapi.com/getPercentage?fname=" + fname + "&sname=" + sname;
		try{
			let response = await fetch(apiURL, {
				method: 'get',
				headers: {
					"x-rapidapi-key": "287ea89645msh92ef8f80b2c3d85p180b15jsn6b84b278d580",
					"x-rapidapi-host": "love-calculator.p.rapidapi.com"
				},
				mode: 'cors',
				cache: 'default',
			});
			let data = await response.json();
			return data;
		}	catch(err){
			return err;
		}
	}
	
	async function main(){
		console.log('result');
	
		let result = await getPercentage();
		console.log(result);
		const resultBlockElement = document.getElementById('main-result-block');
		resultBlockElement.classList.remove('invisible');
		document.getElementById('percentage').textContent = result.percentage;
		document.getElementById('result').textContent = result.result;
	
	}
	
	main();
}