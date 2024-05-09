import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


import { LoginPage } from './Pages/LoginPage';
import { MainPage } from './Pages/MainPage';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = '/' element = {<LoginPage/>} />
          <Route path = '/main' element = {<MainPage/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
