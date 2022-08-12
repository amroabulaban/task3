import React from "react";
import {Routes, Route,Router} from "react-router-dom"
import './App.css';

import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";


function App() {
  return (
<>
<Router>
    <Routes>
       <div>
        <h2>hello world</h2>
         <Route exact path="/" component={<AllPosts/>} /> 
         <Route path="/onepost" component={<OnePost/>}  /> 
      </div>
    </Routes>
  </Router>
</>

    
  );
}

export default App;
