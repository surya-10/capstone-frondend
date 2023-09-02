import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../registerpage/loginPage";
import RegisterPage from "../registerpage/registerPage";
import Home from "./home";
// import ForgotPage from "../forgotPage/forgotPage";
// import ForgotPage from "../forgotPage/forgotPage";

function Dashborad(){
    let navigate = useNavigate();
    return (
        <div className="dashboard-div">
            {/* <div className="nav-div">
                <div className="reg-link">
                    <p>Are you new user ? Click on below button to sign up</p>
                    <button onClick={()=>navigate("/")}></button>
                </div>
            </div> */}
            {/* <ForgotPage/> */}
           
            <Home/>
            
        </div>
    )
}
export default Dashborad;