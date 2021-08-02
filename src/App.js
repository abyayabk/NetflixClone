import { Route, BrowserRouter, Switch } from "react-router-dom";
import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import List from "./pages/List";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
        <Route path='/' exact><Home /></Route>
      <Route path='/List'><List /></Route>
        </Switch>  
    </BrowserRouter>
      
      
      
      
      
     
    
  );
}

export default App;
