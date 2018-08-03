import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                <Route path="/contacts/edit/:id?" 
                  component={ContactEdit} />

                <Route path="/contacts/:id" component={ContactDetails} />
                <Route path="/contacts" component={ContactPage} />
                <Route path="/statistics" component={StatisticPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/" component={HomePage} />  
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
