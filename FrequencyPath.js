var points_frequency =  [[150, 300], [175, 275],
			 [200, 250], [175, 241.67], [200, 233.34], [175, 225], [200, 216.67], [175, 208.34], [200, 200], [175, 191.67], [200, 183.34], [175, 175], [200, 166.67], [175, 158.34], [200, 150], [175, 141.67], [200, 133.34], [175, 125], [200, 116.67], [175, 108.34], [200, 100],
			 [215, 65], [250, 50], [275, 45], [300, 50], [335, 65], [350, 100], [355, 125], [359, 150], [360, 175], [360, 200], [355, 225], [350, 250], [335, 285], [300, 300], [275, 305], [250, 300], [215, 285],
			 [200, 250], [175, 241.67], [200, 233.34], [175, 225], [200, 216.67], [175, 2n08.34], [200, 200], [175, 191.67], [200, 183.34], [175, 175], [200, 166.67], [175, 158.34], [200, 150], [175, 141.67], [200, 133.34], [175, 125], [200, 116.67], [175, 108.34], [200, 100],
			 [185, 65], [150, 50], [125, 45], [100, 50], [65, 65], [50, 100], [45, 125], [40, 150], [40, 175], [40, 200], [45, 225], [50, 250], [65, 285], [100, 300], [125, 305]];

var points_min =  [[150, 300], [175, 275],
 [200, 250], [175, 175], [200, 100],
 [215, 65], [250, 50], [275, 45], [300, 50], [335, 65], [350, 100], [355, 125], [359, 150], [360, 175], [360, 200], [355, 225], [350, 250], [335, 285], [300, 300], [275, 305], [250, 300], [215, 285],
 [200, 250], [175, 175], [200, 100],
 [185, 65], [150, 50], [125, 45], [100, 50], [65, 65], [50, 100], [45, 125], [40, 150], [40, 175], [40, 200], [45, 225], [50, 250], [65, 285], [100, 300], [125, 305]];

var points_mid =
    [[150, 300], [175, 275],
     [200, 250], [175, 225], [200, 200], [175, 175], [200, 150], [175, 125], [200, 100],
     [215, 65], [250, 50], [275, 45], [300, 50], [335, 65], [350, 100], [355, 125], [359, 150], [360, 175], [360, 200], [355, 225], [350, 250], [335, 285], [300, 300], [275, 305], [250, 300], [215, 285],
     [200, 250], [175, 225], [200, 200], [175, 175], [200, 150], [175, 125], [200, 100],
     [185, 65], [150, 50], [125, 45], [100, 50], [65, 65], [50, 100], [45, 125], [40, 150], [40, 175], [40, 200], [45, 225], [50, 250], [65, 285], [100, 300], [125, 305]];

var points_max = [[150, 300], [175, 275],
 [200, 250], [175, 241.67], [200, 233.34], [175, 225], [200, 216.67], [175, 208.34], [200, 200], [175, 191.67], [200, 183.34], [175, 175], [200, 166.67], [175, 158.34], [200, 150], [175, 141.67], [200, 133.34], [175, 125], [200, 116.67], [175, 108.34], [200, 100],
 [215, 65], [250, 50], [275, 45], [300, 50], [335, 65], [350, 100], [355, 125], [359, 150], [360, 175], [360, 200], [355, 225], [350, 250], [335, 285], [300, 300], [275, 305], [250, 300], [215, 285],
 [200, 250], [175, 241.67], [200, 233.34], [175, 225], [200, 216.67], [175, 208.34], [200, 200], [175, 191.67], [200, 183.34], [175, 175], [200, 166.67], [175, 158.34], [200, 150], [175, 141.67], [200, 133.34], [175, 125], [200, 116.67], [175, 108.34], [200, 100],
 [185, 65], [150, 50], [125, 45], [100, 50], [65, 65], [50, 100], [45, 125], [40, 150], [40, 175], [40, 200], [45, 225], [50, 250], [65, 285], [100, 300], [125, 305]];

var svg_frequency = d3.select("#frequency").append("svg")
    .attr("class", "dynamic_waggle")
    .attr("id", "waggle_path")
    .attr("width", 350 + 50)
    .attr("height", 300 + 50).attr("transform", "translate(44,60) rotate(" + 42 +  ")");

var path_frequency = svg_frequency.append("path")
    .data([points_frequency])
    .attr("class", "dynamic_freq")
    .attr("id", "points")
    .attr("stroke-dasharray","5, 26")
    .attr("stroke-linecap","round")
    .attr("d", d3.line() 
	  .curve(d3.curveBasisClosed));

// Draw circles around the coordinates that define the path 
// svg_frequency.selectAll(".point")
//     .data(points_frequency)
//     .enter().append("circle")
//     .attr("r", 4)
//     .attr("transform", function(d) { return "translate(" + d + ")"; });

var bee_points_frequency = [[0,0],[10,-10],[0,-15],[-10,-10],[0,0],[5,-5],[20,25],[0,10],[-2,8],[0,6],[2,8],[0,10],[-20,25],[-5,-5],[0,0]];

var marker_frequency = svg_frequency.append("path")
    .attr("id", "frequencyBiene")
    .attr("class", "biene")
    .data([bee_points_frequency])
    .attr("d", d3.line().curve(d3.curveBasisClosed));

transition_frequency();

d3.select("#frequencySelect").append("input")
    .attr("type", "range")
    .attr("class", "slider")
    .attr("min", 30)
    .attr("max", 150)
    .attr("value", 88)
    .attr("step", "1")
    .on("input", function input() {
	d3.select("#frequencyValue").style("font", "normal " + this.value + "px Verdana");
	redrawPath();
    });

function transition_frequency() {
    marker_frequency.transition()
	.ease(d3.easeLinear)
	.duration(3000)
	.attrTween("transform", translateAlongFrequency(path_frequency.node()))
	.on("end", transition_frequency);
}

// Returns an attrTween for translating along the specified path element.
function translateAlongFrequency(path) {
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

function redrawPath(){
    d3.select(".dynamic_waggle").remove();
    var svg_frequency = d3.select("#frequency").append("svg")
	.attr("class", "dynamic_waggle")
	.attr("id", "waggle_path")
	.attr("width", 350 + 50)
	.attr("height", 300 + 50).attr("transform", "translate(44,60) rotate(" + 42 +  ")");

    var path_frequency = svg_frequency.append("path")
	.data([points_frequency])
	.attr("class", "dynamic_freq")
	.attr("id", "points")
	.attr("stroke-dasharray","5, 26")
	.attr("stroke-linecap","round")
	.attr("d", d3.line() 
	      .curve(d3.curveBasisClosed));
    
    var marker_frequency = svg_frequency.append("path")
	.attr("id", "frequencyBiene")
	.attr("class", "biene")
	.data([bee_points_frequency])
	.attr("d", d3.line().curve(d3.curveBasisClosed));

    transition_frequency();
}
