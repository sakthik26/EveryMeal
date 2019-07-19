import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { stack } from 'd3-shape'
import Axes from './Axes'
import Stack from './Stack'
import testData from '../../testData'
import './Chart.css'

class Chart extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
  }

  render() {
    var barData = testData;
    
    const stacked = stack()
          .keys(["carbs", "proteins", "fats"])
    
    const stackedData = stacked(barData)
    const xDomain = barData.map(d => d.date)

    const margins = { top: 50, right: 20, bottom: 100, left: 60 }
    const svgDimensions = {
      width: 700,
      height: 600
    }
    
    const colors = ["#FFD966", "#A9D18E", "#00B0F0"]

    let maxValue = Math.max(...stackedData[stackedData.length - 1].map(array => array[1]))

    const xScale = this.xScale
      .padding(0.5)
      .domain(xDomain)
      .rangeRound([margins.left, svgDimensions.width - margins.right], 0.02)

    const yScale = this.yScale
      .domain([0, Math.ceil(maxValue * 1.03)])
      .range([svgDimensions.height - margins.bottom, margins.top])      

    return (
      <div className="svg-container">
         <svg className="svg-content-responsive" preserveAspectRatio="xMinYMin meet" viewBox="0 0 700 600"
         >
            <Axes
              scales={{ xScale, yScale }}
              maxValue={maxValue}
              margins={margins}
              svgDimensions={svgDimensions}
            />
            <Stack
            scales={{ xScale, yScale }}
            margins={margins}
            data={barData}
            maxValue={maxValue}
            svgDimensions={svgDimensions}
            colors={colors}
            />
          </svg>
      </div>
    
    )
  }
}
export default Chart
