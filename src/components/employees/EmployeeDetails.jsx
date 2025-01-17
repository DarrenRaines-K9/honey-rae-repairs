import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployeeById } from "../../services/employeeService";
import "./Employee.css"

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState([])
    const { employeeId } = useParams()

useEffect(() => {
    getEmployeeById(employeeId).then((data) => {
        const employeeObj = data[0]
        setEmployee(employeeObj)
    })
}, [employeeId])

return (
    <section className="employee">
        <header className="employee-header">{employee.user?.fullname}</header>
        <div>
            <span className="employee-info">Email : </span>
            {employee.user?.email}
        </div>
        <div>
            <span className="employee-info">Specialty : </span>
            {employee.specialty}
        </div>
        <div>
            <span className="employee-info"> Rate : </span>
            {employee.rate}
        </div>
    </section>
    )
}