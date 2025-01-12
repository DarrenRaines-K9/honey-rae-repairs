export const TicketFilterBar = ({setShowEmergencyOnly, setSearchTerm}) => {
    return (
        <div className="filter-bar">
            <button className="filter-btn btn-primary" onClick={() => { setShowEmergencyOnly(true) }}>Emergency</button>
            <button className="filter-btn btn-info" onClick={() => { setShowEmergencyOnly(false) }}>Show All</button>
            <input className="ticket-search" type="text" placeholder="Search Tickets" onChange={(event) => { setSearchTerm(event.target.value) }} />
        </div>
    )
}