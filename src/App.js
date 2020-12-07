//import logo from './logo.svg';
import './App.css';
import React from "react";
import Sidebar from './Sidebar'


function App() {
  return (
    <div className="app">
     
      <div className="app_body">
        { <div className="sidebar">
          {
             <Sidebar />
          }
        </div> }

      </div>
   
    </div>
  );
}

export default App;
