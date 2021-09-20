function displayTemperature(response) {
  console.log(response.data);
}


let apiKey = "7e67235e40d58e70d3e9c3f3890d96b9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);