var svg = d3.select("#click");
svg.selectAll("use")
    .data([{
        x: 50,
        y: 50
    }])
    .enter()
    .append("use")
    .attr("href", "#pointer")
    .attr("x", function (d) {
        return (d.x);
    })
    .attr("y", function (d) {
        return (d.y);
    });
    // .attr("fill", "#039BE5")
    // .attr("stroke", "#039BE5")
    // .attr("stroke-width", "1px");

var dragHandler = d3.drag()
    .on("drag", function (d) {
        d3.select(this)
            .attr("x", d.x = d3.event.x)
            .attr("y", d.y = d3.event.y);
    });



dragHandler(svg.selectAll("use"));

svg.on("click", function (d) {
    svg.selectAll("use").attr("x", d.x = 50).attr("y", d.y =  50);
});
