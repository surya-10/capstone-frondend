import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

let emailValidation = yup.object({
    email:yup.string().required("email")
})


function CheckEmail(){
    let navigate = useNavigate();
    let {values, handleChange, handleSubmit, handleBlur, touched, errors} = useFormik({
        initialValues:{
            email:""
        },
        validationSchema:emailValidation,
        onSubmit:(obj)=>{
            // console.log(obj);
            checkUserEmail(obj)
        }
    })

    async function checkUserEmail(obj){
        let result = await fetch("https://capstone-ycdb.onrender.com/forgot", {
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "content-type":"application/json"
            }
        })
        let output = await result.json();
        // console.log(output)
        if(output.status===200 && output.msg=="success"){
            navigate(`/update/${output.id}`);
        }
        else{
            navigate("/error");
        }
    }
    return (
        <div className="email-check-div">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="email-div">
                    <form onSubmit={handleSubmit}>
                    <p className="h5 m-3">Enter your registered email</p>
                    <div className="input-group mb-3 mt-2">
                            <input type="email" className="form-control form-control-lg bg-light fs-6 inp" placeholder="Enter email" 
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            />
                        </div>
                        {errors.email && touched.email ? <small className="mb-5 text-danger">Email cannot be empty</small>: ""}
                        <div className="email-check mt-4">
                            <button className="btn bg-danger text-white" type="submit">Check</button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    )
}
export default CheckEmail;