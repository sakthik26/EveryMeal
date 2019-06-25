import React, { Component } from 'react'
import { stack } from 'd3-shape'
import './Stack.css'



const stacked = stack()
      .keys(["carbs", "proteins", "fats"])

export default class Stack extends Component {
  constructor(props) {
    super(props)

      this.state = {
        current: 4,
        active: 1
      }; 
  }

  transformData(data){
    return stacked(data)
  }

  createRect(data, j, status, margins, color, yValue, height, scales){
    return <rect
      key={`${data.date}-${j}-${status}`}
      x={scales.xScale(data.date)}
      y={yValue}
      height={(height - margins.bottom - scales.yScale(data[status]))}
      fill={color}
      width={scales.xScale.bandwidth()}
    />

  }

  render() {
    const { scales, data, margins, svgDimensions} = this.props
    const { xScale, yScale } = scales
    const { height } = svgDimensions
    const barData = data;

    const colors = ["#FFD966", "#A9D18E", "#00B0F0"]

   const max = barData.map(el => (Number(el.carbs) + Number(el.proteins) + Number(el.fats))).reduce((acc, cur) => Math.max(acc, cur), 0);

    const bars = barData.map((d, j) => {
        return <g className={('bar')}>
          <g >
            <rect
              className='rect'
              key={`${d.date}-${j}-HOVER`}
              x={xScale(d.date) - 4}
              y={yScale(max)}
              height={(height - margins.bottom - scales.yScale(max))}
              fill={'#F4F4F4'}
              width={xScale.bandwidth()+8}
            />
          </g>

          {this.createRect(d, j, 'carbs', margins, colors[0], yScale(Number(d.carbs)), height, scales)}
          {this.createRect(d, j, 'proteins', margins, colors[1], yScale(Number(d.proteins)+Number(d.carbs)), height, scales)}
          {this.createRect(d, j, 'fats', margins, colors[2], yScale(Number(d.proteins)+Number(d.carbs)+Number(d.fats)), height, scales)}
        </g>;
        
        });
    return (
      <g>
      {bars}
      </g>
    )
  }
}
