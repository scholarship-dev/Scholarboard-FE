import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./js/store";
import './styles/styles.css';
import Home from './components/HomePageComps/Home';
import Login from './components/AuthPageComps/Login';
import Signup from './components/AuthPageComps/Signup';
import Dashboard from './components/UserComponents/Dashboard';
import Navbar from './components/GeneralComps/Navbar';
import Test from './components/Test'
// import Footer from './components/GeneralComps/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path='/' component={Navbar} />
            <Route path='/' exact component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/dashboard' component={Dashboard} />
            {/* <Route path='/' component={Footer} /> */}
            <Route exact path="/test" component={Test} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
