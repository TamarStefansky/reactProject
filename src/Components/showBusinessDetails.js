
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import objectBusiness from "../singleTons/business";
import HomeIcon from '@mui/icons-material/Home';
import { useContext } from "react";
import AccessContext from "./context";
import { observer } from "mobx-react-lite"
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import PersonIcon from '@mui/icons-material/Person';
const ShowBusinessDetails=observer(({setToSetBusiness})=>{
  return (
    <Box        
        sx={{
            width: '56%',
            margin: 'auto',
            position: 'relative',
            overflow: { xs: 'auto', sm: 'initial' },
            marginBottom:'4vh'
      }}
    >
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
          src={objectBusiness.data.logo}
            loading="lazy"
            alt="Logo"
          />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
          {objectBusiness.data.name}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            {objectBusiness.data.description}
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
              <HomeIcon></HomeIcon>
              </Typography>
              <Typography fontWeight="lg">{objectBusiness.data.address}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
              <SettingsPhoneIcon></SettingsPhoneIcon>
              </Typography>
              <Typography fontWeight="lg">{objectBusiness.data.phone}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                <PersonIcon></PersonIcon>
              </Typography>
              <Typography fontWeight="lg">{objectBusiness.data.owner}</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
          {useContext(AccessContext)=="admin"&&<Button variant="solid" color="primary" onClick={()=>setToSetBusiness(true)}>
              update details
            </Button>}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
});
export default ShowBusinessDetails;
