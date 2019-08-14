// var points = [[125, 275],[150, 250], [175, 225], [150, 200], [175, 175], [150, 150], [175, 125], [150, 100], [175, 75], [190, 40], [225, 25], [250, 20], [275, 25], [310, 40], [325, 75], [330, 100], [334, 125], [335, 150], [335, 175], [330, 200], [325, 225], [310, 260], [275, 275], [250, 280], [225, 275], [190, 260], [175, 225], [150, 200], [175, 175], [150, 150], [175, 125], [150, 100], [175, 75], [160, 40], [125, 25], [100, 20], [75, 25], [40, 40], [25, 75], [20, 100], [15, 125], [15, 150], [15, 175], [20, 200], [25, 225], [40, 260], [75, 275], [100, 280]];

var points = [[150, 300], [175, 275], [200, 250], [175, 225], [200, 200], [175, 175], [200, 150], [175, 125], [200, 100], [215, 65], [250, 50], [275, 45], [300, 50], [335, 65], [350, 100], [355, 125], [359, 150], [360, 175], [360, 200], [355, 225], [350, 250], [335, 285], [300, 300], [275, 305], [250, 300], [215, 285], [200, 250], [175, 225], [200, 200], [175, 175], [200, 150], [175, 125], [200, 100], [185, 65], [150, 50], [125, 45], [100, 50], [65, 65], [50, 100], [45, 125], [40, 150], [40, 175], [40, 200], [45, 225], [50, 250], [65, 285], [100, 300], [125, 305]];

// [[7, 9], [6, 8], [7, 7], [6, 6], [7, 5], [6, 4], [7, 3], [8, 2], [9, 1], [10, 1], [11, 1], [12, 2], [13, 3], [13, 4], [13, 5], [13, 6], [13, 7], [13, 8], [13, 9], [12, 10], [11,11], [10, 11], [9, 11], [8, 10], [7, 9], [6, 8], [7, 7], [6, 6], [7, 5], [6, 4], [7, 3], [6, 2], [5, 1], [4, 1], [3, 1], [2, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [2, 10], [3, 11], [4, 11], [5, 11], [6, 10]]

var svg = d3.select("#angle").append("svg")
    .attr("id", "waggle_path")
    .attr("width", 350 + 50)
    .attr("height", 300 + 50).attr("transform", "translate(60,60) rotate(" + 0 +  ")");

var path = svg.append("path")
    .data([points])
    .attr("id", "points")
    .attr("stroke-dasharray","5, 26")
    .attr("stroke-linecap","round")
    .attr("d", d3.line() 
	  .curve(d3.curveBasisClosed)); 

// Draw circles around the coordinates that define the path 
// svg.selectAll(".point")
//     .data(points)
//     .enter().append("circle")
//     .attr("r", 4)
//     .attr("transform", function(d) { return "translate(" + d + ")"; });

var bee_points = [[0,0],[10,-10],[0,-15],[-10,-10],[0,0],[5,-5],[20,25],[0,10],[-2,8],[0,6],[2,8],[0,10],[-20,25],[-5,-5],[0,0]];

var marker = svg
    .append("path")
    .attr("id", "angleBiene")
    .attr("class", "biene")
    .data([bee_points])
    .attr("d", d3.line().curve(d3.curveBasisClosed));

d3.select("#angleSelect").append("input")
    .attr("type", "range")
    .attr("class", "slider")
    .attr("min", -180)
    .attr("max", 180)
    .attr("value", 0)
    .attr("step", "1")
    .on("input", function input() {
	d3.select("#waggle_path")
	    .attr("transform", "translate(44,60) rotate(" + this.value+  ")");
	d3.select("#angleValue").text(this.value + " degrees from the sun");
    });

transition();

function transition() {
    marker.transition()
	.ease(d3.easeLinear)
	.duration(3000)
	.attrTween("transform", translateAlong(path.node()))
	.on("end", transition);
}

// Returns an attrTween for translating along the specified path element.
function translateAlong(path) {
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
