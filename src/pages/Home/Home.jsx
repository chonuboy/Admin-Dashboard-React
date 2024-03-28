import React from 'react'
import "./home.css"
import Topbox from "../../Components/Topbox/Topbox"
import Chartbox from '../../Components/Chartbox/Chartbox'
import Piechart from '../../Components/Piechartbox/Piechart'
import Bigchartbox from '../../Components/BigchartBox/Bigchartbox'
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, barChartBoxRevenue, barChartBoxVisit } from '../../data'
import Barchartbox from '../../Components/Barchartbox/Barchartbox'
const Home = () => {
  return (
    <div className='home'>
      <div className="box box1"><Topbox /></div>
      <div className="box box2"><Chartbox {...chartBoxUser}/></div>
      <div className="box box3"><Chartbox {...chartBoxProduct} /></div>
      <div className="box box4"><Piechart /></div>
      <div className="box box5"><Chartbox {...chartBoxRevenue} /></div>
      <div className="box box6"><Chartbox {...chartBoxConversion} /></div>
      <div className="box box7"><Bigchartbox/></div>
      <div className="box box8"><Barchartbox {...barChartBoxVisit} /></div>
      <div className="box box9"><Barchartbox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home;