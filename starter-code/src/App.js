import React from 'react'
import './App.css'
import Countries from './components/Countries'
import CountryDetail from './components/CountryDetail'
import countriesData from './countries.json'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" >
            <div className="list-group">
              <Countries Countries={countriesData} />
            </div>
          </div>
          <div className="col-7" >
            <Switch>
              <Route path="/country-detail/:id" render={props => {
                return <CountryDetail Countries={countriesData} {...props} />
              }} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App