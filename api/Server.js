import Express from 'express'
import Session from 'express-session'
import Path from 'path'
import { uuid as UUID } from 'uuidv4'
import Passport from 'passport'
import { GraphQLLocalStrategy, buildContext } from 'graphql-passport'
import { ApolloServer } from 'apollo-server-express'

import User from './User'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const PORT = process.env.PORT || 3001
const SESSION_SECRET = process.env.SESSION_SECRET || 'Wonderfull Code.'

// Passport Config
Passport.use(
  new GraphQLLocalStrategy((email, password, done) => {
    const Users = User.getUsers()
    const MatchingUser = Users.find(User => email === User.email && password === User.password)
    const Error = MatchingUser ? null : new Error('No Matching User.')
    done(Error, MatchingUser)
  })
)

Passport.serializeUser((user, done) => {
  done(null, user.id)
})

Passport.deserializeUser((id, done) => {
  const Users = User.getUsers()
  const MatchingUser = Users.find(User => User.id === id)
  done(null, MatchingUser)
})

// Express Config
const App = Express()

App.use(Session({
  genid: req => UUID(),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

App.use(Express.static(Path.join(__dirname, '../build/')))

// Passport Init
App.use(Passport.initialize())
App.use(Passport.session())

// ApolloServer Init
const Server = new ApolloServer({
  typeDefs, 
  resolvers,
  context: ({ req, res }) => buildContext({ req, res, User }),
  playground: {
    settings: {
      'request.credentials': 'same-origin'
    }
  }
})

Server.applyMiddleware({ app: App })

// Api Server Route For React Production Build
App.get('*', (req, res) => {
  res.sendFile(Path.join(__dirname, '../build/index.html'))
})

// Api Server Init
App.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`)
  console.log(`GraphQL ready at http://localhost:${PORT}/graphql`)
})