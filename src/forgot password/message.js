import { useNavigate } from "react-router-dom"

function Message(){
    let navigate = useNavigate()
    return (
        <div className="msg-div">
            <div className="msg container d-flex justify-content-center align-items-center min-vh-100">
                <div>
                <p className="fs-5 text-dark">Your password has been updated</p>
                <div>
                <button onClick={()=>navigate("/login")} className="btn bg-secondary text-white">Login</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Message;