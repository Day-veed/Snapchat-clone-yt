import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css';
import Chats from './Chats';
import Preview from './Preview';
import WebcamCapture from './WebcamCapture';

function App() {
  return (
    <div className="app">
      <Router>
        <div className='app__body'>
          <Routes>
          <Route path='/chats' element={<Chats />}>
              
              </Route>
            <Route path='/preview' element={<Preview />}>
              
            </Route>
            <Route exact path='/' element={<WebcamCapture />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
