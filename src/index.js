import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service';

function clearFields() {
  $('#zipCode').val("");
  $('.showErrors').text("");
  $('.showTemp').text("");
}


$('#weatherLocation').click(function() {
  let zipCode = $('#zipCode').val();
  clearFields();

  let promise = WeatherService.getWeather(zipCode);

  promise.then(function(response) {

    const body = JSON.parse(response);
    $('.showTemp').text(`The temperature in ${zipCode} is ${body.main.temp} °F`);
    $('.showErrors').text("");

  }, function(error) {

    $('.showErrors').text(`There was an error processing your request: ${error}`);
    $('.showTemp').text("");

  });
});
  

