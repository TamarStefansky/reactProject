import ShowAllServices from "./showAllServices"
import { useState } from 'react';
import AccessContext from './context';
import ShowBusinessDetails from './showBusinessDetails';
import AddMeet from './addMeet';

 export default function UserWindow(){
    const [showAddMeeting,setShowAddMeeting]=useState(false);
    return(<> 
   <AccessContext.Provider value={"user"}>
      <ShowBusinessDetails></ShowBusinessDetails>
    <ShowAllServices setShowAddMeeting={setShowAddMeeting}></ShowAllServices>
    {showAddMeeting && <AddMeet setShowAddMeeting={setShowAddMeeting}></AddMeet>}
    </AccessContext.Provider>

    </>)
 }