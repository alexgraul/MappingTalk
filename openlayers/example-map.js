$(function() {
  //Create out map
  //Set as global so you can play with the object in console
  map = new OpenLayers.Map('map');

  //Create our Tile layer
  var layer = new OpenLayers.Layer.XYZ(
    "Afghanistan Hillshades English", 
    "http://a.tiles.mapbox.com/v3/js-school-showcase.map-xnahyk58/${z}/${x}/${y}.png", { 
    sphericalMercator: true, 
    units: "m",
    numZoomLevels: 19,
    transitionEffect: 'resize',
    isBaseLayer: true,
    buffer: 0,
  });

  //Add tile layer to the map
  map.addLayers([layer]);

  //Set the center of the map by creating a lon/lat 
  //and translating into the map's projection
  var degrees = new OpenLayers.LonLat(-0.09, 51.505);
  degrees.transform(
    new OpenLayers.Projection('EPSG:4326'), 
    new OpenLayers.Projection('EPSG:900913')
  );
  map.setCenter(degrees, 9);


  //Add a marker layer to put our marker on
  var markers = new OpenLayers.Layer.Markers("Markers");
  map.addLayer(markers);

  //Set the size and offset for the marker
  var size = new OpenLayers.Size(21,25);
  var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
  var icon = new OpenLayers.Icon('/openlayers/marker.png', size, offset);
  
  //Create the position of the marker and translate to the map projection
  var schoolPosition = new OpenLayers.LonLat(-0.086324,51.525206);
  schoolPosition.transform(
    new OpenLayers.Projection('EPSG:4326'), 
    new OpenLayers.Projection('EPSG:900913')
  );

  //Add our marker to the map
  markers.addMarker(new OpenLayers.Marker(schoolPosition,icon));

});
