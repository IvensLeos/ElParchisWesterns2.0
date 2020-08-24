import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css'

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import { ContextProvider } from './context/Context'

import App from './App'
import * as serviceWorker from './serviceWorker'

const Client = new ApolloClient({ uri: '/graphql' })

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <ApolloProvider client={Client}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ApolloProvider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()