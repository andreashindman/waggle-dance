var points_distance = [[150, 300], [175, 275], [200, 250], [175, 225], [200, 200], [175, 175], [200, 150], [175, 125], [200, 100], [215, 65], [250, 50], [275, 45], [300, 50], [335, 65], [350, 100], [355, 125], [359, 150], [360, 175], [360, 200], [355, 225], [350, 250], [335, 285], [300, 300], [275, 305], [250, 300], [215, 285], [200, 250], [175, 225], [200, 200], [175, 175], [200, 150], [175, 125], [200, 100], [185, 65], [150, 50], [125, 45], [100, 50], [65, 65], [50, 100], [45, 125], [40, 150], [40, 175], [40, 200], [45, 225], [50, 250], [65, 285], [100, 300], [125, 305]];

var svg_distance = d3.select("#distance").append("svg")
    .attr("id", "waggle_path")
    .attr("width", 350 + 50)
    .attr("height", 300 + 50).attr("transform", "translate(44,60) rotate(" + 42 +  ")");

var path_distance = svg_distance.append("path")
    .data([points_distance])
    .attr("id", "points")
    .attr("stroke-dasharray","5, 26")
    .attr("stroke-linecap","round")
    .attr("d", d3.line() 
	  .curve(d3.curveBasisClosed)); 

var bee_points_distance = [[0,0],[10,-10],[0,-15],[-10,-10],[0,0],[5,-5],[20,25],[0,10],[-2,8],[0,6],[2,8],[0,10],[-20,25],[-5,-5],[0,0]];

var marker_distance = svg_distance.append("path")
    .attr("id", "distanceBiene")
    .attr("class", "biene")
    .data([bee_points])
    .attr("d", d3.line().curve(d3.curveBasisClosed));

d3.select("#distanceSelect").append("input")
    .attr("type", "range")
    .attr("class", "slider")
    .attr("id", "distanceSlider")
    .attr("min", 50)
    .attr("max", 300)
    .attr("value", 100)
    .attr("step", "1")
    .on("input", function input() {
	waggle_duration = this.value * 30;
	d3.select("#distanceValue").text("food is " + this.value + "m away");
	transition_distance();
    });

transition_distance();

var waggle_duration = 3000;

function transition_distance() {
    marker_distance.transition()
	.ease(d3.easeLinear)
	.duration(waggle_duration)
	.attrTween("transform", translateAlongDistance(path_distance.node()))
	.on("end", transition_distance);
}

// Returns an attrTween for translating along the specified path element.
function translateAlongDistance(path) {
    var l = path.getTotalLength();
    return function(d, i, a) {
	return function(t) {
	    var p = path.getPointAtLength(t * l);
	    var nextp = path.getPointAtLength((t + 0.005)*l);
	    var dx = nextp.x - p.x;
	    var dy = nextp.y - p.y;
	    var a = 0;
	    if (dx > 0){
		a = (Math.atan((dy) / (dx))) * 180 / Math.PI + 90;	
	    } else {
		a = (Math.atan((dy) / (dx))) * 180 / Math.PI - 90;
	    }
	    return "translate(" + p.x + "," + p.y + ") rotate(" + a + ") scale(2.5)";
	};
    };
}
