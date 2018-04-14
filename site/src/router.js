import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainScreen from 'screens/Main/Main'
import DetailScreen from 'screens/Detail/Detail'

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={MainScreen} />
      <Route path="/movie" component={DetailScreen} />
    </div>
  </Router>
)

export default AppRouter
