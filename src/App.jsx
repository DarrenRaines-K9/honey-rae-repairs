import "./App.css"
import { CustomerList } from "./components/customers/CustomerList"
import { TicketList } from "./components/tickets/TicketList"

//useState()(REACT) = const [stateVariable, setterFunction], must pass in an initial value for useState("[], 0, '', boolean"), must be imported from REACT 
export const App = () => {
    return <>
        {/*<TicketList />*/}
        <CustomerList />
    </>
}
