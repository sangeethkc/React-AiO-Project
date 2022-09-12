import React from 'react'
import { Header, Stacked as StackedChart } from '../../components'

const Stacked = () => {
  return (
    <div>
      <Header category="Chart" title="Stacked Chart" />
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  )
}

export default Stacked