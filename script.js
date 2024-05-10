
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon =document.querySelector(".weather-icon") 


const apiKey ="fcdce0cf39d8a074d25f1fd1ac6dba9d";

const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(city){
     const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);

     if(responce.status == 404){
           document.querySelector(".error").style.display = "block";
           document.querySelector(".weather").style.display = "none";
     }
     else{
        let data = await responce.json();

  
     
        document.querySelector(".city").innerHTML =data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
        document.querySelector(".wind").innerHTML =data.wind.speed + "km/h";
   
        if(data.weather[0].main == "cloud"){
           weatherIcon.src = "cloud.png";
        }
        else if(data.weather[0].main == "clear"){
           weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "drizzle"){
           weatherIcon.src = "drizzle.png";
        }
       
        else if(data.weather[0].main == "mist"){
           weatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main == "rain"){
           weatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main == "snow"){
           weatherIcon.src = "snow.png";
        }
     
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
   
   }
     }

     

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
