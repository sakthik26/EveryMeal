import React, { Component } from 'react'
import { arc, pie } from 'd3-shape'
import * as d3 from 'd3'
import bgImage from '../../images/fats.png';


class ProgressCircle extends Component {

    componentDidMount() {
        this.drawPie()
    }

    drawPie() {
        const canvasHeight = 150
        const canvasWidth = 150
        const twoPi = 2 * Math.PI

        const arc = d3.arc()
            .startAngle(1.5 * Math.PI)
            .innerRadius(0)
            .outerRadius(canvasWidth / 2);

        const svgCanvas = d3.select(this.refs.test)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .attr("class", "Canvas-svg")
            .style("border", "1px solid black")
            .append("g")
            .attr("transform", "translate(" + canvasWidth / 2 + "," + canvasHeight / 2 + ")");

        const meter = svgCanvas.append("g")
            .attr("class", "progress");

        const bg = svgCanvas.append("g")
            .attr("class", "bg");

        meter.append("path")
            .attr("class", "progress circle")
            .attr("fill", "rgba(52, 52, 52, 0.1)")
            .attr("d", arc.endAngle(twoPi));

        bg.append("image")
            .attr("class", "background-image")
            .attr("xlink:href", bgImage)
            .attr("height",canvasHeight)
            .attr("width",canvasWidth)
            .attr("x","0")
            .attr("y","0");

    }
    render() {
        return (
            <div ref="test"><h2>Fats:</h2></div>
        );
    }


}

export default ProgressCircle