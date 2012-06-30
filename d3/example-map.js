$(function() {

  //Create our SVG
  var svg = d3.select("#chart").append("svg");

  //Create the container group for the country paths
  var counties = svg.append("g")
  .attr("id", "countries")
  .attr("class", "Blues");

  //Create the path projector for a mercator projection
  var projector = d3.geo['mercator']()
  .scale(600)
  .translate([300,280]);
  var pathmaker = d3.geo.path().projection(projector);

  //Load the map geojson
  d3.json("world-map.json", function(json) {
    counties.selectAll("path")
    .data(json.features)
    //Attach the path
    .enter().append("path")
    //Attach the path data to the path
    .attr("d", pathmaker)
    //Assign a class in a quintile via a random number function
    .attr("class", randomValue)
  });


  //Generate the random quintile from the colorbrewer CSS
  function randomValue() {
    var rand = Math.random() * 10;
    var x = "q" + Math.min(8, ~~(rand * 9 / 12)) + "-9";
    console.log(x);
    return x;
  }
});
