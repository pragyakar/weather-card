setActiveWeek();

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

function setActiveWeek(){
    var currentDate = new Date();
    var currentDayNumber = currentDate.getDay();
    var currentHour = currentDate.getHours();
    if (currentHour > 6 && currentHour < 20){
        $('.box').addClass('box-day');
        if(currentDayNumber == 0){
            $('.day-sunday').addClass('active day-active');
        } else if (currentDayNumber == 1){
            $('.day-monday').addClass('active day-active');
        } else if (currentDayNumber == 2){
            $('.day-tuesday').addClass('active day-active');
        } else if (currentDayNumber == 3){
            $('.day-wednesday').addClass('active day-active');
        } else if (currentDayNumber == 4){
            $('.day-thursday').addClass('active day-active');
        } else if (currentDayNumber == 5){
            $('.day-friday').addClass('active day-active');
        } else if (currentDayNumber == 6){
            $('.day-saturday').addClass('active day-active');
        }
    } else {
        $('.box').addClass('box-night');
        if(currentDayNumber == 0){
            $('.day-sunday').addClass('active night-active');
        } else if (currentDayNumber == 1){
            $('.day-monday').addClass('active night-active');
        } else if (currentDayNumber == 2){
            $('.day-tuesday').addClass('active night-active');
        } else if (currentDayNumber == 3){
            $('.day-wednesday').addClass('active night-active');
        } else if (currentDayNumber == 4){
            $('.day-thursday').addClass('active night-active');
        } else if (currentDayNumber == 5){
            $('.day-friday').addClass('active night-active');
        } else if (currentDayNumber == 6){
            $('.day-saturday').addClass('active night-active');
        }
    }
    
}