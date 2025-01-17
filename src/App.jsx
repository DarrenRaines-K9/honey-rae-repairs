import "./App.css";
import { Routes, Route} from "react-router-dom";
import { Login } from "./components/auth/Login";
import {Register} from "./components/auth/Register"
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";

//useState()(REACT) = const [stateVariable, setterFunction], must pass in an initial value for useState("[], 0, '', boolean"), must be imported from REACT
export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    
    <Route
      path="*" 
      element ={
        //check if the user is Authorized first 
      <Authorized>
        {/* Application is the CHILD component of Authorized */}
        <ApplicationViews />
      </Authorized>
    } />
     </Routes>
  );
};
