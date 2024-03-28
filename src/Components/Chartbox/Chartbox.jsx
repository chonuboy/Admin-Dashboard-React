import React from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import "./chartbox.css"


const Chartbox = (props) => {
  return (
    <div className='chartbox'>
      <div className='user_info'>
        <div className='user_title'>
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1 className='user_title_data'>{props.number}</h1>
      </div>
      <div className='chart_info'>
        <div className='chart'>
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='texts'>
          <span className='percentage' style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>{props.percentage}</span>
          <span className='duration'>this month</span>
        </div>
      </div>
    </div>
  )
}

export default Chartbox