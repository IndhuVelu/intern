import React from 'react';
import './App.css';
import Main from './components/main';
import Login from './components/login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Validate_signup from './components/Validate_signup'
import Resetpass from './components/Resetpass'
import Password_reset from './components/Password_reset';
import Book from './components/Book';
import Mybookings from './components/Mybookings'
function App() {
 
  return (
    
    <div className="App">
    
        <Router>
          <div>
              <Switch>
                  <Route path="/"  exact component={ Validate_signup}/>
                  <Route  path="/home" exact component={Login}/>
                  <Route  path="/Train" exact component={Main}/>
                  <Route  path="/Book" exact component={Book}/>
                  <Route  path="/Mybookings" exact component={Mybookings}/>
                  <Route  path="/password_reset" exact component={Password_reset}/>
                  <Route  path="/Resetpass/:id" exact component={Resetpass}/>
                  <Route path="*" component={() => "404 NOT FOUND"} />
              </Switch>
              </div>
            </Router>
    </div>
  );
}

export default App;
