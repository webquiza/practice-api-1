import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$('#weatherLocation').click(function() {
  const zipCode = $('#zipCode').val();
  $('#zipCode').val("");

  // Wrap XMLHttpRequest() in a promise.

  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${process.env.API_KEY}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response); // Do this on resolution of promise.
      } else {
        reject(request.response); // Do this on rejection of promise.
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    const body = JSON.parse(response);
    $('.showTemp').text(`The temperature in ${zipCode} is ${body.main.temp} °F`);
    $('.showErrors').text("");
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
    $('.showTemp').text("");
  });
});
  

