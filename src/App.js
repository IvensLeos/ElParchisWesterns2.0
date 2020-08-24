import React from 'react'

import { useAppContext } from './context/Context'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import LandingPage from './pages/LandingPage'

const App = () => {

  const { User } = useAppContext()

  if (User.Username) 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route exact path="/dashboard" render={() => <h1>Dashboard</h1>} />
        <Route exact path="/playzone" render={() => <h1>Playzone</h1>} />

        <Route render={() => <h2>Uuups... No Hemos Encontrado La Pagina.</h2>} />
      </Switch>
    </BrowserRouter>
  )

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />

        <Route exact path="/playzone" render={() => <h1>Playzone</h1>} />

        <Route render={() => <h2>Uuups... No Hemos Encontrado La Pagina.</h2>} />
      </Switch>
    </BrowserRouter>
  )
}

export default App