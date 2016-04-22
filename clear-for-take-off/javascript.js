$(document).ready(function() {

  // JFK Airport
  var lat = 40.6413110;
  var lng = -73.7781390;

  // SFO Airport
  // var lat = 37.6213130;
  // var lng = -122.3789550;

  // Shanghai Pudong International Airport (PVG)
  // var lat = 31.1443440;
  // var lng = 121.8082730;

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lng,
    type: 'GET',
    data: {APPID: '751b08d25732b4f98ea5d8f06e908963', units: 'imperial'}
  })
  .done(function(data) {
    // You can use each to iterate each value and make your calculations
    $.each(data.list, function(index, el) {
      console.log(el);
    });

    $(".icon img").attr('src', 'images/icons/' + data.list[0].weather[0].icon + '.png');
    $("#temp").text(parseInt(data.list[0].main.temp));
    $(".description").text(data.list[0].weather[0].description);
    $("#wind").html(data.list[0].wind.speed + " mph")
    $("#humidity").html(data.list[0].main.humidity + "%")
    $("#pressure").html(data.list[0].main.humidity + " in")
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    alert(textStatus);
  })
  .always(function() {
    console.log("complete");
  });

  var map = new GMaps({
    el: '#map',
    lat: lat,
    lng: lng,
    zoom: 13
  });

  map.panBy(250, 0); // Move the center to the left

  map.addListener('idle', function() {
    console.log("Map is loaded!");
  });

});
