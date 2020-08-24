import React from 'react'

import { RootContainer, Logo, LogginFormContainer,
         FormContainer, LogginForm as LogginFormClass } from './LandingPage.module.css'

import Inicio from '../assets/images/Inicio.png'

import LogginForm from '../components/Landing/LogginForm'

const LandingPage = () => {
  return (
    <>
      <div className={RootContainer}>
        <div className={Logo}></div>
        <div className={LogginFormContainer}>
          <div></div>
          <div className={FormContainer}>
            <img src={Inicio} alt="Inicio"/>
            <div className={LogginFormClass}>
              <div></div>
              <div>
                <LogginForm />
              </div>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default LandingPage