import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AddMeetform from './addMeetForm';
    
    export default function AddMeet({setShowAddMeeting}){
      const [open, setOpen] = React.useState(true);
    
    
      const handleClose = () => {
        setOpen(false);
            
    
      };
      const [name, setName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };
      return (
        <React.Fragment>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <AddMeetform setShowAddMeeting={setShowAddMeeting}></AddMeetform>
          </Dialog>
        </React.Fragment>
      );
    }





    


   