import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import MainNav from './components/MainNav/MainNav'

import HomePage from './pages/HomePage/HomePage'
import SignupPage from './pages/SignupPage/SignupPage'
import StatisticPage from './pages/StatisticPage/StatisticPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ContactDetails from './pages/ContactDetails/ContactDetails'
import ContactEdit from './pages/ContactEdit/ContactEdit'

import './App.css'
class App extends Component {
  
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <MainNav />

            <div className="app-content">
              <Switch>
                <Route path="/signup" component={SignupPage} />
                <PrivateRoute path="/contacts/edit/:id?" component={ContactEdit} />
                <PrivateRoute path="/contacts/:id" component={ContactDetails} />
                <PrivateRoute path="/contacts" component={ContactPage} />
                <PrivateRoute path="/statistics" component={StatisticPage} />
                <PrivateRoute path="/" component={HomePage} />  
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
