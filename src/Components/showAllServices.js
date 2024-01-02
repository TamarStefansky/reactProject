import { observer } from "mobx-react-lite"
import objectServices from "../singleTons/services"
import * as React from 'react';
import Box from '@mui/material/Box';
import AccessContext from "./context.js";
import { useContext } from "react";
import Button from '@mui/material/Button';
import ShowOneService from "./showOneService.js";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import SwipeDownAltIcon from '@mui/icons-material/SwipeDownAlt';

const ShowAllServices=observer(({setShowAddMeeting})=>{

    return(<>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh" 
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10vh' ,marginTop:'10vh'}}>
        {objectServices.data.map(i => (
          <ShowOneService key={i.id} {...i}></ShowOneService>
        ))}
      </div>
      <div style={{ margin:'auto',marginTop:'10vh'}}>
      {useContext(AccessContext)=="user" && 
        <AddMeetButton setShowAddMeeting={setShowAddMeeting}></AddMeetButton>
          }
          </div>
    </Box>
  
    
    </>)
}
)
    
export default ShowAllServices;


 function AddMeetButton({setShowAddMeeting}) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: '45vw',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width:'8.8vw' }}>
        <img
          src="https://static1.s123-cdn-static-a.com/uploads/7798607/2000_6538395a78440.jpg"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent>
        <Typography level="title-lg" id="card-description" >
        Want to commemorate the moment in the sweetest way?
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
        <div>
              <Typography level="body-xs" fontWeight="lg">
              </Typography>
              <Typography 
              fontWeight="lg" overlay
              underline="none"
              sx={{ color: 'primary' }}
              >press hear</Typography>
              <SwipeDownAltIcon></SwipeDownAltIcon>
        </div>
          
        </Typography> 
           <Button variant="contained" color="primary" onClick={()=>setShowAddMeeting(true)}>To make an appointment</Button>
      </CardContent>
    </Card>
  );
}