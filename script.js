const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1d83dbfc6amsh8e8699d782c1414p15b0a3jsn76039fb655ba',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=london&days=3', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));