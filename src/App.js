import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Register from './components/register';
import RegisterPage from './registerpage/registerPage';
import Login from './registerpage/loginPage';
import { Route, Routes } from 'react-router-dom';
import Dashborad from './dashboard/dashboard';
import DietApp from './dietApp/dietApp';
import GoToLogin from './registerpage/goPage';
import DietPlan from './dietApp/dietPlan';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Dashborad/>}/>
        <Route path='/signup' element={<RegisterPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/diet-app' element={<DietApp/>}/>
        <Route path='/redirect' element={<GoToLogin/>}/>
        <Route path='diet-plan' element={<DietPlan/>}/>
      </Routes>
      {/* <Nav/>
      <Register/> */}
      {/* <RegisterPage/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
