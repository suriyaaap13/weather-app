let weather = {
    "apikey": "ec14d38c1a525e11654c3ca016d9018f",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&APPID="+this.apikey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather: function(data){
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerHTML = "Weather in "+name;
        document.querySelector('.temp').innerHTML = temp+"°C";
        document.querySelector('.icon').src = "http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.humidity').innerHTML = "Humidity: "+humidity+"%";
        
        document.querySelector('.wind').innerHTML = "Wind speed: "+speed+"Km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
        document.querySelector('.search-bar').value = "";
    }

};
document.querySelector('button').addEventListener("click",function(){
    weather.search();
});
document.querySelector('.search-bar').addEventListener("keyup",function(event){
    if(event.key=='Enter'){
        weather.search();
    }
});
weather.fetchWeather('Madras');