import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes, Link, Outlet} from 'react-router-dom';
import LogIn from './Components/login';
import Admin from './Components/admin';
import ShowAllAppointments from './Components/showAllAppointments';
import ShowAllServices from './Components/showAllServices';
import UserWindow from './Components/userWindow';
import Tooltip from '@mui/joy/Tooltip';
import Button from '@mui/joy/Button';


function App() {

  return (
    
    <div className="App">
      
    <BrowserRouter>   
      <Routes>
         <Route path={"/"} element={<Layout />}>
            <Route path={""} element={<UserWindow />} ></Route>
            <Route path={"admin-login"} element={<LogIn />} ></Route>
            <Route path={"admin"} element={<Admin/>} >
                 <Route path={"ShowAllServices"} element={<ShowAllServices />} ></Route>
                 <Route path={"ShowAllAppointments"} element={<ShowAllAppointments />} ></Route>
            </Route>
            
          </Route>
      </Routes>  
    </BrowserRouter> 
    
    </div>

  );
  
}

export default App;


function Layout() {
  return (
    <div>
      <header style={{ width: '100vw', height: '7vh', backgroundColor: 'lightblue', marginBottom: '6vh', display: 'flex', alignItems: 'center' 
      // ,position:'sticky',top:'0vh'
      }}>
        <nav style={{ marginLeft: '4vw' }}>
        <Tooltip  style={{ marginRight: '0.5vw' }}>
        <Button variant="solid" ><Link to="/" style={{ color:'white'}}>Home-Page</Link></Button>
      </Tooltip>
      <Tooltip  >
        <Button variant="solid"><Link to="/admin-login" style={{ color:'white'}}>Admin-Login</Link></Button>
      </Tooltip>          
        </nav>
      </header>
      <Outlet />
    </div>
  );
}






