if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
} else {
    loadWeather('Kathmandu, NP', '');
}

function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function(weather){
            city = weather.city;
            country = weather.country;
            celciusTemp = weather.temp;
            fahrenheitTemp =  Math.round((celciusTemp * 1.8) + 32);
            wcode = '<img src="../icons/'+weather.code+'.svg" class="icon">';  
            wind = weather.wind.speed + ' ' + weather.units.speed;
            humidity = weather.humidity+ '%';
            
            $('.climate-icon').html(wcode);
            $('.temp-cel').html(celciusTemp+'&deg;C');
            $('.temp-far').html(fahrenheitTemp+'&deg;F');
            $('.location').html(city+', '+country);
        },
        error: function(){
            $('.error').text("Could not fetch weather data.");
        }
    })
}
