$(function() {
  //Create our map
  map = $K.map('#map', 900, 600);

  //Set up a color scale for our choropleth
  var colscale = new chroma.ColorScale({
    colors: ['#333', '#eee'],
    limits: chroma.limits([0,10], 'quant', 5)
  });

  //Load the map svg
  map.loadMap('world.svg', function() {

    //Then add the SVG layer to the map
    map.addLayer({
      id: 'countries',
      key: 'iso3',
    });

    //Then apply the choropleth colors
    map.choropleth({
      key: 'iso3',
      colors: function() {
        return colscale.getColor(Math.random() * 10).hex();
      }
    });

  });
});
