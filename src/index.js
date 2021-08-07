import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js';

function clearFields() {
  $('#zipCode').val("");
  $('.showErrors').text("");
  $('.showTemp').text("");
}

function getElements(response) {
  if (response.main) {
    $('.showTemp').text(`The temperature in ${response.name} is ${response.main.temp} °F`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$('#weatherLocation').click(function() {
  let zipCode = $('#zipCode').val();
  clearFields();
  WeatherService.getWeather(zipCode)
    .then(function(response) {
      getElements(response);
    });

});

  

