import React, { useState } from 'react'

import { useAppContext } from '../../context/Context'
import { request } from 'graphql-request'

import { compareSync } from 'bcryptjs'

const LogginForm = () => {

  const [Loggin, SetLoggin] = useState(true)

  function HandleSubmit(e) {
    e.preventDefault()
    if (Loggin) {
      console.log('Loggin')
      let Query = `
        {
          currentUser {
            id
            firstName
            lastName
            email
          }
        }
      `
      request('/graphql', Query).then(data => {
        console.log(data)
      })
    }
    else {
      console.log('Register')
      let Query = `
        mutation {
          login (email: "roy@trenneman.com", password: "imroy") {
            user {
              email
            }
          }
        }
      `
      request('/graphql', Query).then(data => {
        console.log(data)
      })
    }
  }

  return (
    <>
      <form noValidate onSubmit={e => HandleSubmit(e)}>
        {!Loggin && 
        <>
          <div className="form-group">
            <label htmlFor="InputUsername">Nombre De Usuario:</label>
            <input type="text" defaultValue="Username2020" className="form-control is-invalid" id="InputUsername" aria-describedby="username" required={true} />
            <div className="valid-feedback">
              Parece Estar En Orden.
            </div>
            <div className="invalid-feedback">
              El Nombre De Usuario Ya Se Encuentra En Uso, Intenta Con Otro.
            </div>
          </div>
        </>
        }
        <div className="form-group">
          <label htmlFor="InputEmail">Correo Electronico:</label>
          <input type="email" defaultValue="email@email.com" className="form-control is-valid" id="InputEmail" aria-describedby="email" required={true} />
          <div className="valid-feedback">
            Parece Estar En Orden.
          </div>
          <div className="invalid-feedback">
            El Correo Electronico Ya Se Encuentra En Uso, Intenta Con Otro.
          </div>
          <small id="emailHelp" className="form-text text-muted" style={{ fontSize: '12px' }}>Nunca Compartas Tu Direccion De Email.</small>
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword">Password:</label>
          <input type="password" className="form-control is-invalid" id="InputPassword" minLength="8" maxLength="15" required={true} />
          <div className="valid-feedback">
            Parece Estar En Orden.
          </div>
          <div className="invalid-feedback">
            La Contraseña Debe Contener Una Letra Mayuscula, Una Minuscula, Un Numero, Un Caracter Especial Y Al Menos 8 Digitos.
          </div>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input InputCheck" id="InputCheck" defaultChecked required={false} />
          <label className="form-check-label" htmlFor="InputCheck" aria-required="false">¿Mantener Esta Session Abierta?</label>
        </div>
        <button type="submit" className="btn btn-success mr-2">Iniciar</button>
        <button type="button" className="btn btn-danger" onClick={() => !Loggin && SetLoggin(true)}>Cancelar</button>
        {Loggin && 
        <>
          <button type="button" className="btn btn-outline-light mt-3" onClick={() => SetLoggin(false)}>Crear Cuenta</button>
        </>
        }
      </form>
    </>
  )
}

export default LogginForm