import React from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import WesternTitle from './WesternTitle'

import ProfileFrame from './ProfileFrame'

import { NavTabsContainer } from '../../pages/DashboardPage.module.css'

const WesternNav = () => {
  return (
    <>
      <Tabs fill variant="tabs" defaultActiveKey="Perfil" className="TabsClass" >
        <Tab eventKey="Perfil" title="Mi Perfil">
          <div className={NavTabsContainer}>
            <div>
              <ProfileFrame />
            </div>
          </div>
        </Tab>
        <Tab eventKey="Mensajes" title="Mensajes">
          <div className={NavTabsContainer}>
            <div>
              <WesternTitle>Mensajes</WesternTitle>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Cajero" title="Cajero">
          <div className={NavTabsContainer}>
            <div>
              <WesternTitle>Cajero</WesternTitle>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Tienda" title="Tienda">
          <div className={NavTabsContainer}>
            <div>
              <WesternTitle>Tienda</WesternTitle>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Jugar" title="Jugar">
          <div className={NavTabsContainer}>
            <div>
              <WesternTitle>Jugar</WesternTitle>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Ayuda" title="Ayuda">
          <div className={NavTabsContainer}>
            <div>
              <WesternTitle>Ayuda</WesternTitle>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  )
}

export default WesternNav