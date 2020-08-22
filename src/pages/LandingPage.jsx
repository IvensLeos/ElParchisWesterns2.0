import React from 'react'

import { RootContainer, Logo, LogginFormContainer,
         FormContainer, LogginForm } from './LandingPage.module.css'

import Inicio from '../assets/images/Inicio.png'

const LandingPage = () => {
  return (
    <>
      <div className={RootContainer}>
        <div className={Logo}></div>
        <div className={LogginFormContainer}>
          <div></div>
          <div className={FormContainer}>
            <img src={Inicio} alt="Inicio"/>
            <div className={LogginForm}>
              <div></div>
              <div>
                <form noValidate>
                  <div className="form-group">
                    <label htmlFor="InputEmail">Correo Electronico:</label>
                    <input type="email" defaultValue="email@email.com" className="form-control is-valid" id="InputEmail" aria-describedby="emailHelp" required={true} />
                    <div className="valid-feedback">
                      Parece Estar En Orden.
                    </div>
                    <div className="invalid-feedback">
                      Por Favor Ingresa Una Direccion De Correo Electronico Valida.
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
                  <a href="./Dashboard.html" className="btn btn-success mr-2">Iniciar</a>
                  <button type="submit" className="btn btn-danger">Cancelar</button>
                  <div>
                    <button type="submit" className="btn btn-outline-light mt-3">Crear Cuenta</button>
                  </div>
                </form>
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