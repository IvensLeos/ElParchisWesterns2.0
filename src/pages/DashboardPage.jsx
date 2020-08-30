import React from 'react'

import { RootContainer, TabsContainer } from './DashboardPage.module.css'

import WesternNav from '../components/Dashboard/WesternNav'

const DashboardPage = () => {
  return (
    <>
      <div className={RootContainer}>
        <div></div>
        <div className={TabsContainer}>
          <WesternNav />
        </div>
        <div></div>
      </div>
    </>
  )
}

export default DashboardPage