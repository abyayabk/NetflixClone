import { Route, BrowserRouter, Switch } from "react-router-dom";
import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Switch>
      <Route path='/' exact><Home /></Route>
      <Route path={"/Home"} component={Home}></Route>
      </Switch>  
  </BrowserRouter>
  
    </>
    
      
      
      
      
      
     
    
  );
}

export default App;
