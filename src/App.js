import React from 'react';

import './App.css';
import Courses from './Courses';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
    </div>
      <div className="row">
        <div className="col-12">
          <h1>Learn RectJS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vero? </p>
        </div>
      </div>

      <div className="row">
        <div className="col-6 mx-auto">
           <Courses />
        </div>
      </div>
    </div>
  );
}

export default App;
