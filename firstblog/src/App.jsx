import React from "react";
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (

<BrowserRouter>
       <div>
        <Navbar/>
         <Route component={AllPosts}  exact path="/" /> 
         <Route component={OnePost} path="/onepost/:slug" /> 
         
      </div>
      

  </BrowserRouter>

    
  );
}

export default App;
