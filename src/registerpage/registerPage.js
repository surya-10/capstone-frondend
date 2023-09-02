import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export const userValidation = yup.object({
    username:yup.string().required("Enter username"),
    password:yup.string().required("Enter password"),
    email:yup.string().required("Enter your email")
})

function RegisterPage(){
    let navigate = useNavigate();

    let {values, handleChange, handleSubmit, handleBlur, touched, errors} = useFormik({
        initialValues:{
            username:"",
            password:"",
            email:""
        },
        validationSchema:userValidation,
        onSubmit:(obj)=>{
            console.log(obj);
            signUpUser(obj);
            
            // navigate("/login");
            // alert("your signin was successfull, fill below details to login")
        }
    })
    async function signUpUser(obj){
        let reult = await fetch("https://capstone-ycdb.onrender.com/signup", {
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "content-type":"application/json"
            }
        })
        let out = await reult.json()
        if(out.acknowledged){
            navigate("/redirect");
        }
        else{
            let a = document.querySelector(".signup-show");
            a.className = "signup-show1";
        }

    }
    return (
       <div className="res-page-div">
        <form onSubmit={handleSubmit}>
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-4 p-3 bg-white shadow box-area">
                <div className="col-md-6 left-box d-flex justify-content-center align-items-center flex-column border rounded-4 p-3" style={{"backgroundColor":"#103cbe"}}>
                    <div className="img">
                        {/* <img src="https://previews.123rf.com/images/narutotootee/narutotootee1301/narutotootee130100129/17168740-blue-square-abstract-background.jpg" alt="image" className="img-fluid border rounded-2" style={{"width":250+"px"}}/> */}
                        <p className="text-white title h2">Be Signed up</p>
                        <small className="text-white text-center sub-title">Join with us</small>
                    </div>
                </div>
                <div className="col-md-6 right-box">
                    <div className="row-md-6 align-items-center">
                        <div className="header-text mb-4">
                            <p className="h4">Hello, Welcome</p>
                            <p className="h6">Register Here</p>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Enter name"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        </div>
                        {touched.username && errors.username ? <small  className="mb-3" style={{color:"crimson"}}>name cannot be empty</small>:""}
                        <div className="input-group mb-3 mt-4">
                            <input type="email" className="form-control form-control-lg bg-light fs-6" placeholder="Enter email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        </div>
                        {touched.email && errors.email ? <small style={{color:"crimson"}}>email cannot be empty</small>:""}
                        <div className="input-group mb-3 mt-4">
                            <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Enter password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        </div>
                        {touched.password && errors.password ? <small style={{color:"crimson"}}>password cannot be empty</small>:""}
                        
                    </div>
                    <div className="input-group mb-4 mt-3">
                        <button className="btn btn-lg btn-primary fs-6" type="submit">Signup</button>
                    </div>
                    <p className="cursor-pointer point" onClick={()=>navigate("/login")}>Already have an account ?</p>
                    <p className="signup-show">Your email already exist click on <a onClick={()=>navigate("/login")}><button className="btn bg-success text-white">Login</button></a></p>

                </div>
            </div>
        </div>
        </form>
       </div>
    )
}
export default RegisterPage;