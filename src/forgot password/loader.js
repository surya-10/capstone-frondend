import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";


let passValidation = yup.object({
    password: yup.string().required("password")
});
function Loader() {
    let navigate = useNavigate()
    let { id } = useParams();

    let { values, handleChange, handleSubmit, handleBlur, touched, errors } = useFormik({
        initialValues: {
            password: ""
        },
        validationSchema: passValidation,
        onSubmit: (obj) => {
            updatePassword(obj);
        }
    })
    async function updatePassword(obj){
        let result = await fetch(`https://capstone-ycdb.onrender.com/update/${id}`,{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "content-type":"application/json"
            }
        })
        let output = await result.json();
        if(output.status===200){
            navigate("/message");
        }

    }
    return (
        <div className="loader-div">
            <div className="loader container d-flex justify-content-center align-items-center min-vh-100">
                <div className="spinner email-div">
                    <form onSubmit={handleSubmit}>
                        <p className="h5 m-3">Enter new password</p>
                        <div className="input-group mb-3 mt-2">
                            <input type="password" className="form-control form-control-lg bg-light fs-6 inp" placeholder="Enter password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </div>
                        {errors.password && touched.password ? <small className="mb-5 text-danger">Password cannot be empty</small> : ""}
                        <div className="email-check mt-4">
                            <button className="btn bg-success text-white" type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Loader;