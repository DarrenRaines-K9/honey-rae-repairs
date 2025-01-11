import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketServices"
import "./Tickets.css" 
import { Ticket } from "./Ticket"


//useState()(REACT) = const [stateVariable, setterFunction], must pass in an initial value for useState("[], 0, '', boolean"), must be imported from REACT 
export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    
    //useEffect(() => {}, []) = a function and an array "useEffect is a hook like useState", must be imported from REACT 
    useEffect(() => { 
      getAllTickets().then((ticketsArray) => {
        setAllTickets(ticketsArray)
        console.log("tickets set!")
      })
    }, [])//empty [] = dependency array (when empty only runs on initial render of component)
    
    // useEffect to fetch tickets and set to allTickets on initial render
    useEffect(() => {
      if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter(
          (ticket) => ticket.emergency === true)
        setFilteredTickets(emergencyTickets)
      } 
      else {
        setFilteredTickets(allTickets)
      }
    console.log("show emergency change!")
    }, [showEmergencyOnly, allTickets])// When the dependency contains multiple state variables, the useEffect is watching for any time any of the values change.
    
      return (// JSX to display emergency toggle buttons and filteredTickets
      <div className= "tickets-container">
        <h2>Tickets</h2>
        <div>
          <button className="filter-btn btn-primary" onClick={() => {setShowEmergencyOnly(true)}}>Emergency</button>
          <button className="filter-btn btn-info" onClick={() => {setShowEmergencyOnly(false)}}>Show All</button>
        </div>
        <article className="tickets">
          {filteredTickets.map((ticketObj) => {
            return <Ticket ticket={ticketObj}  name="Joe" key={ticketObj.id} />
            })}
        </article>
      </div>
      )
}