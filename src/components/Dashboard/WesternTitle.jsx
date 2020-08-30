import React from 'react'

import Estrellita from '../../assets/images/Estrellita.png'

const WesternTitle = (props) => {
  return (
    <>
      <h1>
        <img className="mr-2" src={Estrellita} alt="Estrella Del Oeste" />
          {props.children}
        <img className="ml-2" src={Estrellita} alt="Estrella Del Oeste" />
      </h1>
    </>
  )
}

export default WesternTitle