
import {employeeList} from './util/employeeList'

function EmployeeList(){

    return(
        <div>
            <h5 className="text text-success">EmployeeList</h5>
            <table className="table table-bordered">
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>SALARY</th>
              </tr>
              {employeeList.map(e=>{
                    return <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.salary}</td>
                    </tr>

              })}


            </table>
        </div>
    )

}

export default EmployeeList;