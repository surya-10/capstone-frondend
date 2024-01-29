import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../reducers/reducer";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";

let dietSchema = yup.object({
    age:yup.string().required("Enter your age"),
    height:yup.string().required("Enter your height"),
    weight:yup.string().required("Enter your weight")
})
function DietApp() {
    let [bmiValue, setBmiValue] = useState("Calculate");
    let {values, handleChange, handleSubmit, handleBlur, touched, errors} = useFormik({
        initialValues:{
            age:"",
            height:"",
            weight:""
        },
        validationSchema:dietSchema,
        onSubmit:(obj)=>{
            
            let height = +obj.height;
            let weight = +obj.weight;
            let age = +obj.age;
            let newObj = {
                age:age,
                height:height,
                weight:weight
            }
            // console.log(newObj)
            getBmiInfo(newObj)
            // console.log(`Hi ${localStorage.getItem("username")} your BMI is `+bmi);
        }
    })
    async function getBmiInfo(obj){
        setBmiValue("Calculating....")
        // console.log(localStorage.getItem("token"))
        let result = await fetch("https://capstone-ycdb.onrender.com/diet-app", {
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "content-type":"application/json",
                "auth-token":localStorage.getItem("token")
            }
        })
        let out = await result.json();
        // console.log(out)
        setBmiValue("Calculate");
        if((out.token==null || out.token=="") && out.response==false){
            navigate("/")
            alert("you are not a valid user. Please do signup or login") 
        }
        else if(out.response==false && out.message == "age should be greater than 2"){
            alert("Age should be greater than 2")
        }
        else{
            localStorage.setItem("bmi", out.userBmi);
            navigate("/diet-plan")
        }
       
        // console.log(out);
        

    }


    let { name } = useSelector(state => state.userInfo.data);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    function logoutAndgotoLogin() {
        let check = window.confirm("Are you sure ?");
        if (check) {
            localStorage.removeItem("username");
            localStorage.removeItem("token");
            localStorage.removeItem("bmi");
            dispatch(logoutUser());
            navigate("/login");
        }
    }

    return (
        <div className="diet-app-div min-vh-100">
            <div className="inside-diet">
                <div className="nav p-4 d-flex justify-content-between align-items-center bg-dark">
                    <p className="app-name h3 text-white text-uppercase"><small className="text-secondary me-1">Welcome!</small>{localStorage.getItem("username")}</p>
                    <button className="acccount-info btn bg-danger text-white" onClick={logoutAndgotoLogin}>Logout</button>
                </div>
                <div className="diet-logo-div p-2 ">
                    <p className="diet-logo-text">Diet Suggestion App</p>
                </div>
                </div>
                <p className="" style={{fontSize:20+"px", color:"darkblue", fontWeight:500}}>Fill below details to find your BMI</p>
                <div className="d-flex justify-content-center flex-column align-content-center diet-form-div">
                    <div className=" d-flex justify-content-center flex-column align-content-center">
                    <form onSubmit={handleSubmit}>
                        <div className="diet-forms">
                           
                            <div className="frm mb-4 mt-4 ">
                                <input type="text" placeholder="enter your age"  className="border-primary"
                                name="age"
                                value={values.age}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            </div>
                            {touched.age && errors.age ? <small  className="mb-5" style={{color:"crimson"}}>age cannot be empty</small>:""}
                            <div className="frm mb-3 mt-3">
                                <input type="text" placeholder="enter your height in cms" className="border-primary" 
                                name="height"
                                value={values.height}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            </div>
                            {touched.height && errors.height ? <small  className="mb-3" style={{color:"crimson"}}>height cannot be empty</small>:""}
                            <div className="frm mb-4 mt-3">
                                <input type="text" placeholder="enter your weight in kg" className="border-primary"
                                name="weight"
                                value={values.weight}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            </div>
                            {touched.weight && errors.weight ? <small  className="mb-3" style={{color:"crimson"}}>weight cannot be empty</small>:""}
                        </div>
                        <div className="diet-btn">
                            <button className="btn bg-dark text-white mt-4" type="submit">{bmiValue}</button>
                        </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}
export default DietApp;