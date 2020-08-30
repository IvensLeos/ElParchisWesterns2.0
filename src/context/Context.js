import React, { createContext, useState, useMemo, useContext, useEffect } from 'react'

import { request } from 'graphql-request'

const AppContext = createContext()

export function ContextProvider(props) {

  const [User, setUser] = useState({})
  //const [User, setUser] = useState({ Username: 'Ivens Leos' })

  const [Session, setSession] = useState({ SessionID: null })

  const Value = useMemo(() => {
    return ({ User, setUser, Session, setSession })
  }, [User, Session])

  useEffect(() => {
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
      const { currentUser } = data || ''
      currentUser && currentUser.email && setUser({ ...User, Username: currentUser.email })
    })
  }, [])

  useEffect(() => {
    //if (!User.Username) return <Redirect to="/" />
    console.log(User)
    return () => {
      //console.log("Prev: " + JSON.stringify(User))
    }
  }, [User])

  return <AppContext.Provider value={Value} {...props} />
}

export function useAppContext() {
  const context = useContext(AppContext)

  if (!context) throw new Error("El Parametro Debe Estar Dentro Del Proveedor AppContext.")

  return context
}

/**
 * const [User, setUser] = useState({
      Id: '5ef0689761a1231478be1983',
      Username: 'IvensLeos8',
      Pasword: '$2a$10$Nh1BE1tbtf0vjRhN9h/CQ.FpDm1HMBTbf9aklHX0ij7.5ypndjU3S',
      Email: 'ivensleos8@gmail.com',
      Image: 'https://i.ibb.co/KLfNzLX/Default-Perfil.png',
      Level: 'PROFICIENT',
      Bio: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      Ranking: '2',
      Name: 'Ivens Omar',
      LastName: 'Leos Sanchez',
      DNI: '09139304713',
      BornDate: '10/08/1997',
      Gender: 'Hombre',
      Nacionality: 'Mexicano',
      Phone: '899 542 3275',
      Address: 'Holanda 141 Loma Real',
      CP: '88715',
      Locality: 'Reynosa',
      State: 'Tamaulipas',
      Width: '1.70',
      Weight: '70',
      Complexion: 'Delgada',
      HairColor: 'Negro',
      Profession: 'Ing. Industrial Administrador',
      Drinker: false,
      Smoker: false,
      Sports: true,
      UserSports: 'Futbol',
      Zodiac: 'LEO',
      Interests: 'Programacion',
      Languages: 'INGLES'
   })
 */