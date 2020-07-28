//declaring variables and referencing them 
let apiBtn = document.querySelector('.api-btn');
let div = document.querySelector('#api-container');



//event listener function to trigger the function
apiBtn.addEventListener('click', function () {

    //getting user current location using geolocation api
    navigator.geolocation.getCurrentPosition(showTemp);


    function showTemp(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        //using fetch to getting the information using retrieved latitude and longitude
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=884f99d4998d367ac703f8b6e59c98e8`)

            .then(Response => Response.json())
            .then(data => {
                let cityName = data['name'];
                let tempval = data['main']['temp'];
                let desc = data['weather'][0]['description'];
                div.innerHTML = 'In ' + cityName + ', temperature is ' + tempval + ' and it is ' + desc;
            });
    };

});