import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DietPlan(){
    let [diet, setDiet] = useState([]);
    let bmi = localStorage.getItem("bmi");
    let username = localStorage.getItem("username");
    let navigate = useNavigate();
    let userBmi = +bmi;
    let obj ={
        bmi:userBmi
    }
    foodSuggestion(obj);

    async function foodSuggestion(obj){
        let result = await fetch("https://capstone-ycdb.onrender.com/diet-suggestion", {
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "auth-token":localStorage.getItem("token"),
                "content-type":"application/json"
            }
        })
        let out = await result.json();
        // console.log(out);
        setDiet(out);
        let src = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/tips_to_lose_100_lbs_slideshow/493ss_getty_rf_woman_stretching_with_therapist.jpg"
    }
    return (
        
        <div className="diet-plan-div">
            <div className="inside-diet-plan">
                <div className="diet-nav bg-dark p-4 d-flex justify-content-between">
                    <p className="text-white h4">Diet App</p>
                    <button className="btn bg-white" onClick={()=>navigate("/diet-app")}>Home</button>
                </div>
                <div className="container app-cont mt-5">

               
                <p className="fs-4">Hello {username}, we have calulated your Body Mass Index(BMI) based on input you given.</p>
                <p className="f2-3 mt-5">Your BMI is<span className="bg-black text-white p-2 h4 rounded ms-2 mt-3">{bmi}</span></p>
                </div>
                <hr/>
                <div className="">
                    <div className="user-diet mt-5">
                    
                        {diet.map((val, ind)=>(
                            <div className="user-plan mt-3" key={ind}>
                                <p className="h4 text-uppercase diet-title text-danger">{val.title}</p>
                                <p className="fs">{val.description}</p>
                                <img src={val.img}/>
                                <p className="fs2">{val.description}</p>
                                <div className="diet-suggestion d-flex flex-column mt-3">
                                    <div className="foods mt-5">
                                        <p className="h3 mt-3 text-uppercase text-decoration-underline">1. {val.title0}</p>
                                        <img src={val.img0}/>
                                        <p className="fs display-4">{val.tip0}</p>
                                        </div>
                                    </div>
                                    <div className="foods mt-5">
                                        <p className="h3 mt-3 text-uppercase text-decoration-underline">2. {val.title1}</p>
                                        <img src={val.img1}/>
                                        <p className="fs">{val.tip1}</p>
                                    </div>
                                    <div className="foods mt-5">
                                        <p className="h3 mt-3 text-uppercase text-decoration-underline">3. {val.title2}</p>
                                        <img src={val.img2}/>
                                        <p className="fs">{val.tip2}</p>
                                    </div>
                                    <div className="foods mt-5">
                                        <p className="h3 mt-3 text-uppercase text-decoration-underline">4. {val.title3}</p>
                                        <img src={val.img3}/>
                                        <p className="fs">{val.tip3}</p>
                                    </div>
                                    <div className="foods mt-5">
                                        <p className="h3 mt-3 text-uppercase text-decoration-underline">5. {val.title4}</p>
                                        <img src={val.img4}/>
                                        <p className="fs">{val.tip4}</p>
                                    </div>
                                    <div className="foods mt-5">
                                        <p className="h3 mt-3 text-uppercase text-decoration-underline">6. {val.title5}</p>
                                        <img src={val.img5}/>
                                        <p className="fs">{val.tip5}</p>
                                    </div>
                                    <div className="foods mt-4 mb-5">
                                        <p className="h3 mt-3 text-uppercase text-decoration-underline">7. {val.title6}</p>
                                        <img src={val.img6}/>
                                        <p className="fs">{val.tip6}</p>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DietPlan;