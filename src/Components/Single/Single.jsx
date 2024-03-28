import { Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import "./single.css"
import { Tooltip } from "@mui/material"

const Single = (props) => {
    return (
        <div className='single'>
            <div className="review">
                <div className="details">
                    <div className="info_head">
                        <img src={props.img} alt="" />
                        <h1>{props.title}</h1>
                    </div>
                    <div className="info_desc">
                        {Object.entries(props.info).map((items) => {
                            return (
                                <div className="single_info" key={items[0]}>
                                    <span className="item_name">{items[0]} :</span>
                                    <span className="item_value">{items[1]}</span>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <hr />
                {props.chart && (
                    <div className="info_chart">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={props.chart.data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {props.chart.dataKeys.map((datakey) => {
                                    return (
                                        <Line type="monotone" dataKey={datakey.name} stroke={datakey.color} activeDot={{ r: 8 }} />
                                    )
                                })}

                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}

            </div>
            <div className="activity">
                <h1>Latest Activities</h1>
                {props.activities && (
                    <ul className="activity_list">
                        {props.activities.map((activity => {
                            return (
                                <li key={activity.text}>
                                    <div className="recent_activities">
                                        <p>{activity.text}</p>
                                        <time>{activity.time}</time>
                                    </div>
                                </li>
                            )
                        }))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Single