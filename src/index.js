import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// document.ready function is not needed

//$(document).ready(function() {

$('#weatherLocation').click(function() {
  const zipCode = $('#zipCode').val();
  //const state = $('#state').val();
  $('#zipCode').val("");
  //$('#state').val("");

  let request = new XMLHttpRequest();
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${process.env.API_KEY}`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      // debugger;
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };

  request.open("GET", url, true);
  request.send();

  function getElements(response) {
    $('.showTemp').text(`The temperature in ${zipCode} is ${response.main.temp} degrees fahrenheit.`);

    //Example with zip code and state
    
    //$('.showTemp').text(`The temperature in ${zipCode}, ${state} is ${response.main.temp} degrees fahrenheit.`);
  }
  //});

});

