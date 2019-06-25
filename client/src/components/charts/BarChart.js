"use strict";

import React, { Component } from 'react'
import * as d3 from 'd3';

class BarChart extends Component {
    componentDidMount() {
        const data = [ 2000, 1500, 2500, 2000, 1500 ];
        const bottomLabels = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
        this.drawBarChart(data);
    }
    drawBarChart(data)  {
        const {width, height} = {width: 600, height: 400};
        const scale = (Math.max(...data))/height;
                                
        const svg = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", width+50)
            .attr("height", height+50)
            .style("border", "1px solid grey");

        svg.selectAll("rect")
            .data(data).enter()
                .append("rect")
                .attr("width", (width / data.length)-10)
                .attr("height", (d) => d / scale)
                .attr("fill","#FFD966")
                .attr("x", (d,i) => 50 + i * (width / data.length))
                .attr("y", (d) => height - (d/scale));

        svg.selectAll("text")
            .data(data).enter()
                .append("text")
                .attr("x", (d, i) => i * 45 + 10)
                .attr("y", (d, i) => height - d * scale - 10)
                .text(d => d);

    }
    render() { return <div ref="canvas"></div> }
}

export default BarChart;
