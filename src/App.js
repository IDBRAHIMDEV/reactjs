import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './Posts';

import './App.css';
import Courses from './Courses';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <div className="container">

           <Switch>
               <Route exact path="/blog" component={Posts}></Route>
               <Route exact path="/courses" component={Courses}></Route>
               <Route component={Courses}></Route>
           </Switch>
        
      </div>
      </Router>
    </div>
  );
}

export default App;
