import { useState } from "react";
import userList from "./util/userList";

function Login(props){

 const [name,setName]=useState("");
 const [password,setPassword]=useState("");
 const [message,setMessage]=useState("");

 let {cp}=props;

 let showHome=()=>{

   let usr= userList.find(e=>e.name==name && e.password==password);

    if(usr){
      cp();
    }else{
         setMessage("Invalid username or password")
    }
    
 }


    return( 
        <div className="container">
          <h3>Login Page</h3> 
        <h5 className="text text-danger">{message}</h5>
         Name: <input onChange={(e)=>setName(e.target.value)} type='text' className="form-control"/>
         Password:<input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" />
         <button onClick={()=>showHome()} className="btn btn-primary">login</button>

        </div>
    )
}

export default Login;