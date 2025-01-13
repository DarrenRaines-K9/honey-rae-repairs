import "./Employee.css"
import { getStaffUsers } from "../../services/userService"
import { useEffect, useState } from "react"
import { Employee } from "./Employee"


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
                return <Employee employee={employeeObj} key={employeeObj.id} />
            })}
        </div>
    )

}