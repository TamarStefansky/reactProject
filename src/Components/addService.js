
    import {useForm} from 'react-hook-form';
    import TextField from '@mui/material/TextField';
    import * as React from 'react';
    import Button from '@mui/material/Button';
    import Dialog from '@mui/material/Dialog';
    import DialogActions from '@mui/material/DialogActions';
    import DialogContent from '@mui/material/DialogContent';
    import DialogContentText from '@mui/material/DialogContentText';
    import DialogTitle from '@mui/material/DialogTitle';
    import objecrServices from '../singleTons/services';
    
    export default function AddService({setShowAddService}){
      const [open, setOpen] = React.useState(true);
    
    
      const handleClose = () => {
        setOpen(false);
            
    
      };
      const {register, handleSubmit} = useForm();
      return (
        <React.Fragment>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Fill In The Details"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              <form onSubmit={handleSubmit((data)=>{
               objecrServices.postService(data);
                handleClose();
                setShowAddService(false);
                }) }>
        <TextField label="Id" variant="filled" color="primary" {...register("id")}/>
        <br></br>
        <TextField label="Name" variant="filled" color="primary" {...register("name")}/>
        <br></br>
        <TextField label="Description" variant="filled" color="primary" {...register("description")}/>
        <br></br>
        <TextField label="Price" variant="filled" color="primary" {...register("price")}/>
        <br></br>
        <TextField label="Duration " variant="filled" color="primary" {...register("duration")}/>
        <br></br>
        <TextField label="Logo " variant="filled" color="primary" {...register("logo")}/>
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" type="primary" style={{marginLeft:'5vw'}}>save</Button>
        </form>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
            
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
    }





