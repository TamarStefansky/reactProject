import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import BusinessForm from './businessForm';
export default function UpdateBusiness({setToSetBusiness}){
  const [open, setOpen] = React.useState(true);


  const handleClose = () => {
    setOpen(false);
        

  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <BusinessForm setToSetBusiness={setToSetBusiness} handleClose={handleClose}></BusinessForm>
      </Dialog>
    </React.Fragment>
  );
}