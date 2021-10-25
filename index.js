
try{

    const api={
        key: "378969b681afbf8d77984bc8858a6704",
        base: "https://api.openweathermap.org/data/2.5/"

    } 

    const searchb= document.querySelector(".mysearch");
   
    searchb.addEventListener('keypress',setQuery);
    
    function setQuery(evt){
        if(evt.keyCode == 13){
          getResults(searchb.value)
        }
    }   

    function getResults(query){
        fetch(`${api.base}/weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather =>{
            return weather.json();
        }).then(displayResults);
    }

    function displayResults(weather){
        console.log(weather)
        var city =document.querySelector(".city");
          if (searchb.value ==""){
            city.innerHTML="<div class='alert alert-danger '>Search location cannot be empty</div>"
            city.classList.add('alert');
        }else if((searchb.value) != `${weather.name}`){
            city.innerHTML="<div class='alert alert-warning '> No search city or location </div>"
            city.classList.add('alert');

        }else{

            city.innerHTML=`${weather.name}, ${weather.sys.country}`;
            city.classList.add("cityfound");
        }

        let degree=document.getElementById("mydegree");
        degree.innerHTML=`${weather.main.temp}<span>&#176C<span>`;

        let symbol = document.getElementById("mySymbol");
        symbol.innerHTML=weather.weather[0].description ;

        let range=document.getElementById("myrange");
        range.innerHTML=`min: ${Math.floor(weather.main.temp_min)}<span>&#176C</span> / max: ${Math.ceil(weather.main.temp_max)}<span>&#176</span>C`
    } 
    let da=new Date();
    let days_of_week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weeks=days_of_week[da.getDay()];

    let day=da.getDate()

    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month=months[da.getMonth()];

    let year=da.getFullYear();
    var days=document.getElementById("myday");

    days.innerHTML=`${weeks} ${day} ${month} ${year}`;
    

}catch(err){
    var error=document.getElementById("errors");
    error.innerHTML=err;
}
