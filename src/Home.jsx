
import { Link,Outlet } from "react-router-dom";

function Home(){

    return(
        <div>
            <h4 className="text text-if">Home Page!!!</h4>
            <Link to="register" className="ms-4">Register</Link>
            <Link to="search" className="ms-4">Search</Link>
            <Link to="delete" className="ms-4">Delete</Link>
            <Link to="employeeList" className="ms-4">Employee List</Link>
             <Outlet/>
        </div>
    )


}

export default Home;