import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../reducers/reducer";

function Register(){
    let [name, setName] = useState("");
    let [password, setPassword] = useState(""); 
    let dispatch = useDispatch(loginUser)

    function addUser(){
        let obj = {
            name:name,
            password:password
        }
        // dispatch(loginUser(obj))
        // console.log(obj);
    }
    return (
        <div className="register-div">
            <div className="register">
                <div>
                <label>Username</label>
                <input type="text" placeholder="enter your name"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                <label>Password</label>
                <input type="password" placeholder="enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button onClick={addUser}>Register</button>
            </div>
        </div>
    )
}
export default Register;