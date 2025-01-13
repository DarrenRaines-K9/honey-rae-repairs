import "./Employee.css"

export const Employee = ({ employee }) => {
    return (
        <div className="employee">
            <div>
                <div className="employee-info">Name</div>
                <div>{employee.fullName}</div>
            </div>
            <div>
                <div className="employee-info">Email</div>
                <div>{employee.email}</div>
            </div>
        </div>
    )
}