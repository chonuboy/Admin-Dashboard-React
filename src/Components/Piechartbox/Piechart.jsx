import React from 'react'
import { PieChart, Pie, Cell} from 'recharts';
import { ResponsiveContainer,Tooltip } from 'recharts';
import "./piechart.css"
const Piechart = (props) => {
    const data = [
        { name: "Mobile", value: 400, color: "#0088FE" },
        { name: "Desktop", value: 300, color: "#00C49F" },
        { name: "Laptop", value: 300, color: "#FFBB28" },
        { name: "Tablet", value: 200, color: "#FF8042" }
    ]
    return (
        <div className='piechartbox'>
            <h1>Leads By Source</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="options">
                    {data.map(function (item) {
                        return (
                            <div className="option" key={item.name}>
                                <div className="dot" style={{ backgroundColor: item.color }}></div>
                                <div className='specs'>
                                    <span>{item.name}</span>
                                    <span>{item.value}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Piechart