import React from 'react'
import { pieChartData } from '../../data/dummy'
import { Pie as PieChart } from '../../components/'

import { Header } from "../../components";


const Pie = () => {
  return (
    <div className='w-full'>
      <Header category="Pie" title="Pie Chart" />
      <PieChart id="pie-chart" data={pieChartData} legendVisibiliy height="full" />
      <div>

      </div>
    </div>
  )
}

export default Pie