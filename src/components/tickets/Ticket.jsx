import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"
import { assignedTicket, updateTicket } from "../../services/ticketServices"

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
    const [employees,setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
        getAllEmployees().then((employeeArray) => {
        setEmployees(employeeArray)
    })
    }, [])

   useEffect(() => {

        const foundEmployee = employees.find(
            (employee) => employee.id === ticket.employeeTickets[0]?.employeeId)
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket])


    const handleClaim  = () => {
        const currentEmployee = employees.find(employee => employee.userId === currentUser.id)
        
        const newEmployeeTicket = {
            employeeId: currentEmployee.id,
            serviceTicketId: ticket.id,
        }
        assignedTicket(newEmployeeTicket).then(() => {
            getAndSetTickets()
        })
    }

const handleClose = () => {
    const closedTicket = {
        id: ticket.id,
        userId: ticket.userId,
        description: ticket.description,
        emergency: ticket.emergency,
        dateCompleted: new Date(),
    }
    updateTicket(closedTicket).then(() => {
        getAndSetTickets()
    })
}

    return (
    <section className="ticket">
        <header className="ticket-info">#{ticket.id}</header>
        <div>{ticket.description}</div>
        <footer>
            <div>
                <div className="ticket-info">Assignee</div>
                <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div>
            </div>
            <div>
                <div className="ticket-info">Emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
            </div>
            <div className="btn-container">
                {currentUser.isStaff && !assignedEmployee ? (<button className="btn btn-secondary" onClick={handleClaim}>Claim</button>) : ("")}
                {/* here */}
                {assignedEmployee?.userId === currentUser.id && !ticket.dateCompleted ? (<button className="btn btn-warning" onClick={handleClose}>Close</button>) : ("")}
            </div>
        </footer>
    </section>
    )
}