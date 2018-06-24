if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
} else {
    loadWeather('Kathmandu, NP', '');
}

$(document).ready(function(){
    setInterval(loadWeather, 10000);
})

function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function(weather){
            city = weather.city;
            country = weather.country;
            celciusTemp = weather.temp+'&deg;C';
            farenheitTemp = 
            wcode = '<img src="../icons/'+weather.code+'.svg" class="icon">';  
            wind = weather.wind.speed + ' ' + weather.units.speed;
            humidity = weather.humidity+ '%';
            
            $('.climate-icon').html(wcode);
            $('.temp-cel').html(celciusTemp);
            $('.location').html(city+', '+country);
            $('.wind').html(wind);
            

        }
    })
}
function getFarenTemp(celciusTemp){

}