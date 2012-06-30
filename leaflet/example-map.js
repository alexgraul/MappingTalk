$(function() {
  var tileURL = 'http://a.tiles.mapbox.com/v3/js-school-showcase.map-xnahyk58/{z}/{x}/{y}.png'

  //Create out leaflet map
  //I've made this global so you can explore it easily via console
  map = new L.Map('map', {//Center the map on London,
    //Center the map on London,
    center : new L.LatLng(51.505, -0.09),     

    //Set the initial zoom to 12
    zoom : 12,

    //Add a tile layer
    layers : new L.TileLayer(tileURL, {
      attribution: 'Map data &copy;OpenStreetMap contributors',
      maxZoom: 18
    })
  });

  //And now lets add 3 markers to our map
  var jsSchoolLocation = new L.LatLng(51.525206, -0.086324);

  var jsSchool = new L.Marker(jsSchoolLocation);
  map.addLayer(jsSchool);

});

