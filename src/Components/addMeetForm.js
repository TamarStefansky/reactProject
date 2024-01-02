import * as React from 'react';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import { useForm } from 'react-hook-form';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TodayIcon from '@mui/icons-material/Today';
import Alert from '@mui/joy/Alert';
import { useState } from 'react';
import objectAppiontments from '../singleTons/appointment'

import objectServices from '../singleTons/services'

export default function AddMeetform({setShowAddMeeting}) {
  const [servName, setServName] = React.useState('');
  function handleChange(event){
    setServName(event.target.value);

  }

  const { register, handleSubmit, reset, setValue } = useForm();
  const [isDateAvailable, setIsDateAvailable] = useState(true);
  const dateTimeRef = register('dateTime');

  const ddMeet = async (data) => {
      try {
          const status = await objectAppiontments.postAppointment(data);
          if (status === 200) {
              setShowAddMeeting(false);
          }
      } catch (error) {
          setIsDateAvailable(false);
          setValue('dateTime', '');
          dateTimeRef.current.focus();
      }
  };
  


  return <>
    <form onSubmit={handleSubmit((data)=>ddMeet(data))}>
      <Card
        data-resizable
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          width: 343,
          overflow: 'auto',
          resize: 'horizontal',
          '--icon-size': '100px',
        }}
      >
        <CardOverflow variant="solid" color="primary">
          <AspectRatio
            variant="outlined"
            color="primary"
            ratio="1"
            sx={{
              m: 'auto',
              transform: 'translateY(50%)',
              borderRadius: '50%',
              width: 'var(--icon-size)',
              boxShadow: 'sm',
              bgcolor: 'background.surface',
              position: 'relative',
            }}
          >
            <div>
              <TodayIcon sx={{ fontSize: '4rem' }} />
            </div>
          </AspectRatio>
        </CardOverflow>
        <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
          To book a meeting
        </Typography>
        <CardContent sx={{ maxWidth: '40ch' }}>
          <FormControl sx={{ minWidth: 120 }}>
            <FormLabel>Type:</FormLabel>

            <Select sx={{ height: 40 }}
              defaultValue={servName}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              {...register("serviceName")}
            >
              <MenuItem value=""></MenuItem>
              {objectServices.data.map((i, index) => (
                < MenuItem key={index} value={i.name}>{i.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl >
            <FormLabel>Name:</FormLabel>
            <Input endDecorator={<PersonIcon />} {...register("clientName")} />
          </FormControl>
          <FormControl>
            <FormLabel>Phone:</FormLabel>
            <Input endDecorator={<PhoneEnabledIcon />} type="tel" {...register("clientPhone")} />
          </FormControl>
          <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>E-mail:</FormLabel>
            <Input type="email" endDecorator={<AlternateEmailIcon />}
              {...register("clientEmail")} />
          </FormControl>
          <FormControl>
            <FormLabel>Date:</FormLabel>
            <Input type="datetime-local"  {...register("dateTime")} />
          </FormControl>
        </CardContent>
        {isDateAvailable || (
      <Alert severity="error" sx={{ marginBottom: 2 ,color:'red'}}>
          Appointment is not available! Please choose a different time.
      </Alert>
  )}
        <CardActions
          orientation="vertical"
          buttonFlex={1}
          sx={{
            '--Button-radius': '40px',
            width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
          }}
        >
          <Button variant="solid" color="primary" type='submit'>
            Save
          </Button>
        </CardActions>
      </Card>
    </form>
  </>
}
