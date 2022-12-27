let city = "faridabad";

const getWeather = () => {
  fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
    APIKey
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let currentWeather = response.current;
      let todayWeather = response.forecast.forecastday[0];

      cityAddress.innerText = `${response.location.name}, ${response.location.region}, ${response.location.country}`;
      updateTime.innerText = currentWeather.last_updated;
      // conditionIcon.innerText = currentWeather.condition.icon;
      // conditionText.innerText = currentWeather.condition.text;
      //Temperature card
      temp.innerText = currentWeather.temp_c;
      feelsLike.innerText = currentWeather.feelslike_c;
      maxTemp.innerText = todayWeather.day.maxtemp_c;
      minTemp.innerText = todayWeather.day.mintemp_c;
      //atmosphere card
      humidity.innerText = currentWeather.humidity;
      windSpeed.innerText = currentWeather.wind_kph;
      windDegree.innerText = currentWeather.wind_degree;
      windDirection.innerText = currentWeather.wind_dir;
      // precipitation.innerText = currentWeather.precip_mm;
      visibility.innerText = currentWeather.vis_km;
      uvIndex.innerText = currentWeather.uv;
      //astrology card
      sunrise.innerText = todayWeather.astro.sunrise;
      sunset.innerText = todayWeather.astro.sunset;
      moonrise.innerText = todayWeather.astro.moonrise;
      moonset.innerText = todayWeather.astro.moonset;
    })
    .catch((err) => console.error(err));
};

getWeather();
