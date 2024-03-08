const handleInputChange = () => {
  result_container.innerHTML = ''; 
}

const search= async()=>{
if(country.value !== ''){
let countryName = country.value;
const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
console.log(response);
response.json().then((data)=>{
let result = data[0];
let cname= result.name.common;
let ccapital = result.capital[0];
let cpopulation = result.population;
let ctimezone = result.timezones[0];
let ccontinent = result.continents[0];
let flag = result.flags.png;
let nativeLnag = [];
for (var lang in result.languages) {
  nativeLnag.push(result.languages[lang])
}
let currencyTemp = result.currencies;
console.log(currencyTemp);
let currency;
for (var curr in currencyTemp){
  currency=currencyTemp[curr].name;
}
let cmap = result.maps.googleMaps;

result_container.innerHTML = `
<div class="card" style="background: rgba(239, 241, 240, 0.192); width: 18rem; ">
                  <img src="${flag}" class="card-img-top p-3" alt="...">
                  <div class="card-body">
                    <h5 class="card-title" style="color:white">${cname}</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item" style="background: rgba(239, 241, 240, 0.057); color: white; ">Capital: ${ccapital}</li>
                    <li class="list-group-item" style="background: rgba(239, 241, 240, 0.057); color: white; ">Population: ${cpopulation}</li>
                    <li class="list-group-item" style="background: rgba(239, 241, 240, 0.057); color: white; ">TimeZone: ${ctimezone}</li>
                    <li class="list-group-item" style="background: rgba(239, 241, 240, 0.057); color: white;">Continent: ${ccontinent}</li>
                    <li class="list-group-item" style="background: rgba(239, 241, 240, 0.057);color: white;">Languages: ${nativeLnag}</li>
                    <li class="list-group-item" style="background: rgba(239, 241, 240, 0.057); color: white;">Currency: ${currency}</li>



                  </ul>
                  <div class="card-body" style="background: rgba(239, 241, 240, 0.057);">
                    <a href="${cmap}" class="card-link">Map</a>
                  </div>
                </div>`


})


}
else{
alert("Please enter country name")
}

}
function clearPlaceholder() {
  document.getElementById("country").placeholder = "";
}

function restorePlaceholder() {
  document.getElementById("country").placeholder = "Enter country name";
}