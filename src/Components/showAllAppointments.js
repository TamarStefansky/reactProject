import { observer } from "mobx-react-lite";
import objectAppointment from "../singleTons/appointment.js";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Sheet from '@mui/joy/Sheet';

const ShowAllAppointments = observer(() => {
  return (
    <>
      <h2>All The Meetings</h2>
      <Container sx={{ display: 'flex',flexDirection:'column', justifyContent: 'center' }}>
        {objectAppointment.data.slice()?.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime)).map((i) => (
          <ShowAppointment key={i.id} {...i}></ShowAppointment>
        ))}
      </Container>
    </>
  );
});

function ShowAppointment(props) {
  let color = 'green';
  const meetingDate = new Date(props.dateTime);
  const currentDate = new Date();
  if (meetingDate < currentDate)
        color = 'gray';
    if (currentDate.toDateString() === meetingDate.toDateString()) {
        color = 'red';
    } else if (
        meetingDate >= currentDate && meetingDate <= new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)
    ) {
        color = 'orange';
    }
  return (  
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '2vh'}}>
        <Sheet variant="outlined"  color="neutral" sx={{ p: 4, width: '60vw', height: '10vh' ,display: 'flex', justifyContent: 'center', alignItems:'center',backgroundColor:color }}>
          <div style={{ fontSize: '10v%' }}>
            <p>
              {props.serviceName} - {props.clientName} - {props.clientPhone} - {props.clientEmail} - {props.dateTime} 
            </p>
          </div>
        </Sheet>
      </Container>
    </React.Fragment>
  );
}

export default ShowAllAppointments;