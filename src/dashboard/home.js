import { useNavigate } from "react-router-dom"

function Home(){
    let navigate = useNavigate();
    return (
        <div className="home-div min-vh-100 bg-dark home-parent lh-1">
            <div className="base-nav bg-dark">
                <div className="base-nav-btns bg-dark home-parent">
                <div className="container-fluid d-flex justify-content-center align-items-center flex-column pt-5 home-parent cont">
                
                    <div className="register-link mt-5 mb-3 links">
                        <p className="h5 mb-2 link-text2 text-white">If you new, Click on signup.</p>
                        <button className="bg-primary text-white link-btn btn btn-md" onClick={()=>navigate("/signup")}>Signup</button>
                    </div>
                    <div className="login-link">
                        <p className="text-uppercase link-text2 text-white">Already have account ? Click on login button</p>
                        <button className="btn link-btn btn-md text-black btn-link-log" onClick={()=>navigate("/login")}>Login</button>
                    </div>
                    <div className="about mt-5 mb-5">
                        <p className="text-white link-text h4 text-decoration-underline mb-5">ABOUT US</p>
                        <div className="about-content">
                            <p className="text-white fs-6 text-left link-text link-text1">In today's fast-paced world, maintaining a balanced and healthy diet can be challenging. With busy schedules and a vast array of dietary choices, it's easy to make choices that may not be in the best interest of our health. That's where NutriGuide comes in – your personalized diet suggestion app.</p>
                            <p className="text-white fs-6 text-left link-text link-text1">NutriGuide is designed to empower you to make informed and healthy food choices effortlessly. Whether you're striving for weight management, seeking to improve your overall well-being, or managing specific dietary needs, NutriGuide is your go-to companion for achieving your nutritional goals.</p>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}
export default Home;