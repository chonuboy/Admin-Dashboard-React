import React from 'react'
import "./barchart.css"
import { BarChart,ResponsiveContainer,Bar,Tooltip } from 'recharts'
const Barchartbox = (props) => {
    return (
        <div className='barChartBox'>
            <h1 className='title'>{props.title}</h1>
            <div className='chart'>
                <ResponsiveContainer width="100%" height={150}>
                    <BarChart width={150} height={40} data={props.chartData}>
                        <Tooltip
                            contentStyle={{background:"#2a3447",borderRadius:"5px",}} labelStyle={{display:"none"}} cursor={{fill:"none"}}
                        />
                        <Bar dataKey={props.dataKey} fill={props.color}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Barchartbox