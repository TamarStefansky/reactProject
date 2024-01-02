import {useForm} from 'react-hook-form';
import { Avatar, TextField, Alert, Button, Typography, Box,  Grid } from '@mui/material';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from 'react';
import objectBusiness from '../singleTons/business'

export default function LogIn(){
  const [isError, setIsError] = useState(false);

    function CheckIsAdmin(data){
        const sendBody={
            name:data.name,
            password:data.password
        }
        fetch("http://localhost:8787/login",{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
             },
            body: JSON.stringify(sendBody)
       }).then((res)=>{
          if(res.status==200){
            window.location.pathname='/admin/ShowAllServices';
          }
          else{
            setIsError(true);
            reset();
          }

            
        })
    }
    const {register, handleSubmit, reset} = useForm();
    return (<>
      <Grid container component="main" >
          <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                  backgroundImage: `url(${objectBusiness.data.logo})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: (t) =>
                      t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',

              }}
          />
          <Grid 
          item xs={12} sm={8} md={5} elevation={9} 
          >
              <Box
                  sx={{
                      my: 8,
                      mx: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      
                  }}
              >
                  <Avatar sx={{ bgcolor: "#4654A3" }}>
                      <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                      Sign in
                  </Typography>
                  <form onSubmit={handleSubmit((data)=>CheckIsAdmin(data))}>
                      <TextField
                          label="Username"
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          {...register("name")}
                      />
                      <TextField
                          id="outlined-password-input"
                          label="Password"
                          type="password"
                          autoComplete="current-password"
                          margin="normal"
                          required
                          fullWidth
                          {...register("password")}
                      />
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                      >
                          Sign In
                      </Button>
                  </form>
                  {isError && <Alert severity="error">Username or password is incorrect, please try again</Alert>}
              </Box>
          </Grid>

      </Grid >

  </>
  );
  }