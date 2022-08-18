import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";


function App() {
  return (

<BrowserRouter>
       <div>
        <Navbar/>
        <Switch>
         <Route component={AllPosts}  exact path="/" /> 
         <Route component={OnePost} path="/onepost/:slug" /> 
         </Switch>
         <Footer/>
      </div>
      

  </BrowserRouter>

    
  );
}

export default App;
