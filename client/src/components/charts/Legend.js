import React, { Component } from 'react'
import { select as d3Select } from 'd3-selection'

export default class Legend extends Component {
    componentDidMount() {
        this.renderLegend()
    }

    componentDidUpdate() {
        this.renderLegend()
    }

    renderLegend() {

        const canvas = d3Select(this.refs.legend).append("svg")
            .attr("width", 500)
            .attr("height", 100)

        canvas.append("rect").attr("x",50).attr("y", 7).attr("width",15).attr("height",15).attr("fill","#FFD966")
        canvas.append("rect").attr("x",200).attr("y", 7).attr("width",15).attr("height",15).attr("fill","#A9D18E")
        canvas.append("rect").attr("x",300).attr("y", 7).attr("width",15).attr("height",15).attr("fill","#00B0F0")

        canvas.append("text").attr("x", 70).attr("y", 20).text("Carbohydrates")
        canvas.append("text").attr("x", 220).attr("y", 20).text("Proteins")
        canvas.append("text").attr("x", 320).attr("y", 20).text("Fats")

    }

    render() {
        return (
            <div className={"ConsumptionGraphLegend"} ref="legend">
            </div>

        )
    }
}
