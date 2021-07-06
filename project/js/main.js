function calculate() {
    async function getPercentage() {
        const inpObjfn = document.getElementById("fn");
        const inpObjsn = document.getElementById("sn");
        // Form Validation
        if (! inpObjfn.checkValidity() || ! inpObjsn.checkValidity()) {
            document.getElementById("demo").innerHTML = inpObj.validationMessage;
        } else {
            event.preventDefault();
            let fname = document.forms["myForm"]["yourname"].value;
            let sname = document.forms["myForm"]["yourcrush"].value;

            const apiURL = "https://love-calculator.p.rapidapi.com/getPercentage?fname=" + fname + "&sname=" + sname;
            try {
                let response = await fetch(apiURL, {
                    method: 'get',
                    headers: {
                        "x-rapidapi-key": "287ea89645msh92ef8f80b2c3d85p180b15jsn6b84b278d580",
                        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
                    },
                    mode: 'cors',
                    cache: 'default'
                });
                let data = await response.json();
                return data;
            } catch (err) {
                return err;
            }
        }
    }

    async function main() {
        console.log('result');

        let result = await getPercentage();
        console.log(result);

        const resultBlockElement = document.getElementById('main-result-block');
        resultBlockElement.classList.remove('invisible');
        document.getElementById('percentage').textContent = result.percentage;

        const resulthappy = document.getElementById('happy');
        const resultneutral = document.getElementById('neutral');
        const resultnope = document.getElementById('nope');

        var percentage = result.percentage;

        /*Progress Bar*/
        var i = 0;
            if (i == 0) {
                i = 1;
                var elem = document.getElementById("myBar");
                var width = 1;
                var id = setInterval(frame, 10);
                function frame() {
                    if (width >= percentage) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        elem.style.width = width + "%";
                    }
                }
            }
     	/*Progress Bar*/

        if (percentage >= 80) {
            resulthappy.classList.remove('invisible');
            document.getElementById('result').style.color = "#7A0000";
        } else if (percentage >= 55 && percentage < 80) {
            resultneutral.classList.remove('invisible');
            document.getElementById('result').style.color = "#bd2222";
        } else {
            resultnope.classList.remove('invisible');
            document.getElementById('result').style.color = "#FF5C5C";
        }
        document.getElementById('result').textContent = result.result;
    }

    main();
}

/*Heart*/
const hover = document.querySelector(".heart");
const audio = document.querySelector("audio");

hover.addEventListener("mouseenter", function () {
    audio.play();
})
