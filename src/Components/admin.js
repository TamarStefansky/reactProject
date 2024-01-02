import Button from '@mui/material/Button';
import { Outlet } from 'react-router-dom';
import ShowBusinessDetails from './showBusinessDetails';
import { useState } from 'react';
import AddService from './addService';
import AccessContext from './context';
import UpdateBusiness from './updateBusiness';
export default function Admin(){

  const [showAddService,setShowAddService]=useState(false);
  const [toSetBusiness,setToSetBusiness]=useState(false);
  function changeToServices(){
    window.location.pathname='/admin/ShowAllServices';
  }
  function changeToAppointments(){
    window.location.pathname='/admin/ShowAllAppointments';  
  }
  
    return(<>
<AccessContext.Provider value={"admin"}> 
  <ShowBusinessDetails setToSetBusiness={setToSetBusiness}></ShowBusinessDetails>
<Button  variant="outlined" onClick={changeToServices}>Business Services </Button>
<Button  variant="outlined" onClick={changeToAppointments}>All Mettings</Button>
<br></br>
<br></br>
<Button variant="contained" color="primary" onClick={()=>setShowAddService(true)}>To Add A Service</Button>
<Outlet></Outlet>
{toSetBusiness && <UpdateBusiness setToSetBusiness={setToSetBusiness}></UpdateBusiness>}
{showAddService && <AddService setShowAddService={setShowAddService}></AddService>}
</AccessContext.Provider>
    </>)
  
}



