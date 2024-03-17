let input_val = document.getElementById("input_val")
let btn = document.getElementById("btn")
const city = document.getElementById("cityoutput")
const description = document.getElementById("description")
const temp = document.getElementById("temp")
const wind = document.getElementById("wind")


// let display_weather = document.getElementById("display_weather")

const conversion = (val) => (val - 273).toFixed(3);

key = "e0a6a87b2d8f2f688831dfd200218c02"
function getData(){

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+input_val.value +'&appid='+key)
        .then((data)=> data.json())
        // console.log(data)
        .then((data)=>
        {
                
                    // console.log(data)
                    let nameval = data['name']
                    let descrip = data['weather']['0']['description']
                    let tempe = data['main']['temp'];
                    let windspeed = data['wind']['speed']
                
                    city.innerHTML = `Weather of <span>${nameval}</span>`

                    temp.innerHTML = `Temperature: <span>${ conversion(tempe)}c</span>`

                    description.innerHTML=`Sky condition : <span> ${descrip} </span>`
                    
                    wind.innerHTML = `Wind Speed : <span>${windspeed} km/h</span>`
        })
        .catch(error => alert("plese enter valid city name"));
  
}

