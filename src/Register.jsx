import {useState} from 'react';
function Register(){

    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [salary,setSalary]=useState(0);

    let addEmployee=()=>{
        alert(id+" "+name+' '+salary);
    }

    return(
        <div>
            <h5 className="text text-info">Register Page!!!</h5>
            ID:<input onChange={(e)=>setId(e.target.value)} type="text" className="form-control"/>
            NAME:<input  onChange={e=>setName(e.target.value)} type="text" className="form-control"/>
            SALARY:<input onChange={e=>setSalary(e.target.value)}  type="text" className="form-control"/>
            <button onClick={()=>addEmployee() } className="btn btn-success">Register</button>
        </div>
    )
}

export default Register;

// npm i react-router-dom