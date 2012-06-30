$(function() {
  var tileURL = 'http://a.tiles.mapbox.com/v3/js-school-showcase.map-xnahyk58/{Z}/{X}/{Y}.png';

  //Create our tile layer
  var layer = new MM.TemplatedLayer(tileURL);

  //Create map and add tile layer
  //global so you can play in console
  map = new MM.Map('map', layer);

  //Create our marker layer, point it at our GeoJSON
  var markerLayer = mmg().factory(simplestyle_factory).url('marker.json');

  //Add it to the map
  map.addLayer(markerLayer);

  //Center map and zoom
  map.setCenter({ lat: 51.55, lon: -0.09 }).setZoom(12);
});
