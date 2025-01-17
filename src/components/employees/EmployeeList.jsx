import "./Employee.css"
import { getStaffUsers } from "../../services/userService"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { User } from "../users/User"


export const EmployeeList = () => {
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) => {
            setEmployee(employeeArray)
        })
    }, [])

    return (
        <div className="employees">
            {employee.map((employeeObj) => {
                return (
                <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
                    <User user={employeeObj}/>
                </Link>
            )
            })}
        </div>
    )

}