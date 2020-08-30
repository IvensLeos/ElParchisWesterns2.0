import React from 'react'

import { useAppContext } from '../../context/Context'

import WesternTitle from './WesternTitle'

import DefaultPerfil from '../../assets/images/DefaultPerfil.png'

import { DefaultProfile1, Level, Biography } from '../../pages/DashboardPage.module.css'

const ProfileFrame = () => {

  const { User, setUser } = useAppContext()

  return (
    <>
      <img className={DefaultProfile1} src={DefaultPerfil} alt="Imagen De Perfil"/>
      <WesternTitle>Mi Perfil</WesternTitle>
      <p><strong className={Level}>(AVANZADO)</strong></p>
      <p className={Biography}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repellat, facere tempore perferendis quasi saepe voluptatem 
        beatae? Voluptatem nostrum explicabo ullam, pariatur similique 
        placeat aspernatur? Perferendis explicabo repudiandae dolores 
        pariatur voluptatum!
      </p>
      <button type="submit" className="btn btn-info mr-2">Editar Perfil</button>
      <button type="button" className="btn btn-danger">Cerrar Session</button>
    </>
  )
}

export default ProfileFrame