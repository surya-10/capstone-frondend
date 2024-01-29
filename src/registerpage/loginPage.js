import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { loginUser } from "../reducers/reducer";
import { useState } from "react";

let loginValidation = yup.object({
    email:yup.string().required("Enter email"),
    password:yup.string().required("Enter password")
});

function Login() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [login, setLogin] = useState("Login");

    let {values, handleChange, handleSubmit, handleBlur, touched, errors} = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:loginValidation,
        onSubmit:(obj)=>{
            // console.log(obj)
            loginCheck(obj);
        }
    })

    async function loginCheck(obj){
        setLogin("Verifying..")
        let result = await fetch("https://capstone-ycdb.onrender.com/login", {
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "content-type":"application/json"
            }
        })
        let isExistUser = await result.json();
        setLogin("Login");
        // console.log(isExistUser);
        if(isExistUser.response==false){
            // let b  = document.querySelector(".forgot1");
            // console.log(b)
            let a = document.querySelector(".show");
            if(a.className = "show"){
                a.classList.add("show1");
            }
            
        }
        else if(isExistUser.response == "invalid"){
            let a = document.querySelector(".forgot");
            if(a.className=="forgot"){
                a.classList.add("forgot1");
            }
            else{
                a.classList.add("forgot")
            }
           
            // a.className = "forgot"
            // a.className = "show1";
        }
        else{
            localStorage.setItem("username", isExistUser.username);
            localStorage.setItem("token", isExistUser.token);
        dispatch(loginUser({name:isExistUser.username}))
        navigate("/diet-app");
        }
    }
    return (
        <div className="login-page-div">
            <div className="container d-flex justify-content-center align-items-center min-vh-100 ">
                
                <div className="row-6 p-4 rounded-5 login-width">
                
                <form onSubmit={handleSubmit}>
                <hr className="hr"/>
                <div className="">
                    <div className="col d-flex justify-content-space-between align-items-center flex-column">
                        
                        <div className="header-text mt-1 mb-3">
                            <h4 className="text-white txt">Hello, again!</h4>
                            <p className="tex text-white">Fill below details to login</p>
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control form-control-lg bg-light fs-6 inp" placeholder="Enter email" 
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}/>
                        </div>
                        {touched.email && errors.email ? <small style={{color:"salmon"}}>email cannot be empty</small>:""}
                        <div className="input-group mb-3 mt-2">
                            <input type="password" className="form-control form-control-lg bg-light fs-6 inp" placeholder="Enter password" 
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}/>
                        </div>
                        {touched.password && errors.password ? <small style={{color:"salmon"}}>password cannot be empty</small>:""}
                    </div>
                    </div>
                    <div className="input-group mb-2 d-flex justify-content-end mt-3">
                        <button className="btn btn-lg text-dark fs-6 border login-btn" type="submit">{login}</button>
                    </div>
                    <p className="forgot">Your email or password is incorrect</p>
                    <div className="text-white fr-div" onClick={()=>navigate("/forgot-password")}>Forgot password ?</div>
                    <p className="point text-white mt-2" onClick={()=>navigate("/signup")}>Don't have an account ?</p>
                    
                    </form>
                    <small className="show">Your email doesn't exist. Do <a onClick={()=>navigate("/signup")}><button className="btn bg-dark text-white">Signup</button></a></small>
                    
                    
                </div>
                
            </div>
        </div>
    )
}
export default Login;