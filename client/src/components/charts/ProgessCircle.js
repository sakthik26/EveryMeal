import React, { Component } from 'react'
import * as d3 from 'd3'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    centerElements: {
        textAlign: 'center',
    },
})

class ProgressCircle extends Component {

    componentDidMount() {
        this.drawPie()
    }

    drawPie() {
        const canvasHeight = 150
        const canvasWidth = 150
        const startA = this.props.percentage*(2*Math.PI)

        const arc = d3.arc()
            .startAngle(startA)
            .innerRadius(0)
            .outerRadius(canvasWidth / 2);

        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .attr("class", "CanvasSvg")

        const bg = svgCanvas.append("g")
            .attr("class", "bg");

        const meter = svgCanvas.append("g")
            .attr("transform", "translate(" + canvasWidth / 2 + "," + canvasHeight / 2 + ")").append("g")
            .attr("class", "progress");

        meter.append("path")
            .attr("class", "progress-circle")
            .attr("fill", "rgba(52, 52, 52, 0.7)")
            .attr("stroke", "#fff")
            .attr("stroke-width", "3px")
            .attr("d", arc.endAngle(2 * Math.PI))
            ;

        bg.append("image")
            .attr("class", "background-image")
            .attr("xlink:href", this.props.url)
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("x", "0")
            .attr("y", "0");

    }

      
    render() {
        const { classes } = this.props 

        return (
            <div>
                <div className={classes.centerElements} ref="canvas"></div>
                <h4 className={classes.centerElements}>{this.props.label}: {Math.round(this.props.percentage*100)}%</h4>
            </div>
            
        );
    }


}

export default withStyles(styles)(ProgressCircle)