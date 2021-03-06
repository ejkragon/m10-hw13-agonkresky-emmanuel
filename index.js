// 1. Convert a`const` declaration to`const` or`let` where appropriate. - Used find/replace feature to change first three "var"'s to "const."
// 2. Convert a promise - based function (a function call with `.then`) to instead use`async/await`. - Fetch API code, added const added await in front of json, removed second .then line. I notated lines with "(**)" - around lines 50, 56, 62
// 3. Convert a`function` declaration into a arrow function. https://www.w3schools.com/js/js_arrow_function.asp see "(***)" by formEl.onsubmit lines (around line 30)
// 4. Convert a string concatenation to instead use template literals and string interpolation. See "(****)" feels like temp lines (around line 154)
// 5. Convert some object - related code to use ES6 destructuring. "(*****)" Replaced lines 71 with 77




// Resources:
// https://www.youtube.com/watch?v=_ApRMRGI-6g
// https://www.youtube.com/watch?v=c2PGgkCIjEA
// https://javascript.info/destructuring-assignment
// https://stackoverflow.com/questions/55141840/how-can-i-destructure-an-object-property-from-an-api-call
// https://wesbos.com/destructuring-objects







// capture references to important DOM elements
const weatherContainer = document.getElementById('weather');
const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');

// (***) attempt to write line below as an arrow function 
// formEl.onsubmit = function(e) {
formEl.onsubmit = (e) => {
  // prevent the page from refreshing
  e.preventDefault();

  // capture user's input from form field
var userInput = inputEl.value.trim()
  // abort API call if user entered no value
  if (!userInput) return
  // call the API and then update the page
  getWeather(userInput)
    .then(displayWeatherInfo)
    .catch(displayLocNotFound)

  // reset form field to a blank state
  inputEl.value = ""
}

// calls the OpenWeather API and returns an object of weather info
// (**) replacing following line with the line below it
// function getWeather(query) {
async function getWeather(query) {
  // default search to USA
  if (!query.includes(",")) query += ',us'
  // return the fetch call which returns a promise
  // allows us to call .then on this function
  // (**) added following line, removed return
    var res = await
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    query +
    '&units=imperial&appid=6efff70fe1477748e31c17d1c504635f'
  )
  // (**) cleaned up the line below and removed second .then statement
    var data = await res.json()
    {
      // location not found, throw error/reject promise
      if (data.cod === "404") throw new Error('location not found')
      // create weather icon URL
      var iconUrl = 'https://openweathermap.org/img/wn/' +
        data.weather[0].icon +
        '@2x.png'
      //(*****) replaced this line with the line 77 const description = data.weather[0].description
      var actualTemp = data.main.temp
      var feelsLikeTemp = data.main.feels_like
      var place = data.name + ", " + data.sys.country
       
      
      //(*****)
      var { description } = data.weather[0]

      // create JS date object from Unix timestamp
      var updatedAt = new Date(data.dt * 1000)
      // this object is used by displayWeatherInfo to update the HTML
      return {
        coords: data.coord.lat + ',' + data.coord.lon,
        description: description,
        iconUrl: iconUrl,
        actualTemp: actualTemp,
        feelsLikeTemp: feelsLikeTemp,
        place: place,
        updatedAt: updatedAt
      }
    }
}

// show error message when location isn't found
function displayLocNotFound() {
  // clears any previous weather info
  weatherContainer.innerHTML = "";
  // create h2, add error msg, and add to page
  var errMsg = document.createElement('h2')
  errMsg.textContent = "Location not found"
  weatherContainer.appendChild(errMsg)
}

// updates HTML to display weather info
function displayWeatherInfo(weatherObj) {
  // clears any previous weather info
  weatherContainer.innerHTML = "";

  // inserts a linebreak <br> to weather section tag
  function addBreak() {
    weatherContainer.appendChild(
      document.createElement('br')
    )
  }

  // weather location element
  var placeName = document.createElement('h2')
  placeName.textContent = weatherObj.place
  weatherContainer.appendChild(placeName)

  // map link element based on lat/long
  var whereLink = document.createElement('a')
  whereLink.textContent = "Click to view map"
  whereLink.href = "https://www.google.com/maps/search/?api=1&query=" + weatherObj.coords
  whereLink.target = "__BLANK"
  weatherContainer.appendChild(whereLink)

  // weather icon img
  var icon = document.createElement('img')
  icon.src = weatherObj.iconUrl
  weatherContainer.appendChild(icon)

  // weather description
  var description = document.createElement('p')
  description.textContent = weatherObj.description
  description.style.textTransform = 'capitalize'
  weatherContainer.appendChild(description)

  addBreak()

  // current temperature
   temp = document.createElement('p')
  temp.textContent = "Current: " +
    weatherObj.actualTemp +
    "?? F"
  weatherContainer.appendChild(temp)

  // "feels like" temperature
  var feelsLikeTemp = document.createElement('p')
  // (****) attempt to replace the 3 lines below with template literals
  // feelsLikeTemp.textContent = "Feels like: " +
    // weatherObj.feelsLikeTemp +
    // "?? F"
  feelsLikeTemp.textContent = `Feels like: ${weatherObj.feelsLikeTemp}?? F`
  weatherContainer.appendChild(feelsLikeTemp)

  addBreak()

  // time weather was last updated
  var updatedAt = document.createElement('p')
    updatedAt.textContent = "Last updated: " +
    weatherObj.updatedAt.toLocaleTimeString(
     'en-US',
      {
        hour: 'numeric',
        minute: '2-digit'
      }
    )
  weatherContainer.appendChild(updatedAt)
}


