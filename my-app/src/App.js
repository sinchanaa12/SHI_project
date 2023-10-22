
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstaIcon from"./components/InstaIcon";
import Login from"./components/login";
import Donate from './components/Donate';


//import"bootstrap/dist/js/bootstrap.bundle.js"
//import"bootstrap/dist/css/bootstrap.css"
function App() {
  return (
    <BrowserRouter>
    <Routes>
    
        
        <Route path="/Donate" component={Donate} />
        {/* Add other routes as needed */}
        <Route path="login" element={Login }/>
    <Route path="InstaIcon" component={InstaIcon} />
    
    
     
    </Routes>
  </BrowserRouter>

  );
}

export default App;



