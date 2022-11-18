import React from 'react'
import { LineChart, Line, CartesianGrid, YAxis, XAxis } from "recharts"

import chartData from '../Data.json'


function ChartData() {
  return (
    <div>
         <h2>2017-01-11 19:12</h2>
        <div className='Vheader'>
            <strong className='Vheader'>Recorded Data </strong>        
        </div>
      <LineChart width={1800} height={750} data={chartData}>
      <Line type="monotone" dataKey="Value" stroke="green" />
      <CartesianGrid stroke="gray" />
      <YAxis />
      <XAxis dataKey="ID" />
    </LineChart>
    </div>
  )
}

export default ChartData