import { useNavigate } from "react-router-dom"

function Error(){
    let navigate = useNavigate();
    return (
        <div className="error-div">
            <div className="loader container d-flex justify-content-center align-items-center min-vh-100">
                <div className="spinner">
                    <p className="fs-5 txt-err">Your email does not email. Please signup first.</p>
                    <button className="btn bg-primary text-white" onClick={()=>navigate("/")}>Signup</button>
                </div>
            </div>
        </div>
    )
}
export default Error;