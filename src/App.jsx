import Home from "./Home";
import Login from "./Login";

import {BrowserRouter as Router,Routes,Route} 
from 'react-router-dom';

import { useState } from "react";
import Delete from "./Delete";
import EmployeeList from "./EmployeeList";
import Register from "./Register";
import Search from "./Search";

function App(){

  const [flag,setFlag]=useState(true);

  let changePage=()=>{
   setFlag(false);
  }

  if(flag){
    return(
      <div className="container">
         <Login cp={changePage}/>
      </div>
    )
  }else{
    return(
     <div className="container">
      <Router>
        <Routes>
   
        <Route path="" element={<Home/>}>
        <Route path="register" element={<Register/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="delete" element={<Delete/>}/>
        <Route path="employeeList" element={<EmployeeList/>}/>
        </Route>

        </Routes>
      </Router>
     </div>
    )
  }

  

}

export default App;