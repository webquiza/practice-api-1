export default class WeatherService {
  static getWeather(zipCode) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${process.env.API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}




