import { useNavigate } from "react-router-dom";

function GoToLogin(){
    let navigate = useNavigate();
    return (
        <div className="go-to-login min-vh-100">
            <div className="container-fluid bg-dark min-vh-100 d-flex justify-content-center align-items-center align-content-center">
                <p className="disply-3 text-white">Your signup was successful. Click to<button className="btn-grp btn ms-2 text-white bg-success" onClick={()=>navigate("/login")}>Login</button></p>
            </div>
        </div>
    )
}
export default GoToLogin;