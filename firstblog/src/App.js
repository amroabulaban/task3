import React from "react";
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';

import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";


function App() {
  return (

<BrowserRouter>
       <div>
        
         <Route component={AllPosts}  exact path="/" /> 
         <Route component={OnePost} path="/onepost/:slug" /> 
      </div>

  </BrowserRouter>

    
  );
}

export default App;
