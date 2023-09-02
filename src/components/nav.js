import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../reducers/reducer";

function Nav(){

    let {name} = useSelector(state=>state.userInfo.data);
    console.log(name)
    let dispatch = useDispatch(logoutUser)

    
    return (
        <div className="nav-div">
            <div className="nav">
                <h2>{name}</h2>
                <button onClick={()=>dispatch(logoutUser())}>Logout</button>
            </div>
        </div>
    )
}
export default Nav;