import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';

export default function ShowOneService(service) {
  return (
    <Card variant="outlined" sx={{ width: '30vw', margin:'auto'}}>
      <CardOverflow>
        <AspectRatio ratio="2">
            
          <img
            src={service.picturer}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton>
      </CardOverflow>
      <CardContent>
      <Typography level="body-sm">
          <Link href="#multiple-actions">{service.name}</Link>
        </Typography>
        <Typography level="title-md">
          <Link href="#multiple-actions" overlay underline="none">
            {service.description}
          </Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">Service id: {service.id}</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">Price: {service.price}</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">Duration: {service.duration} minutes</Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}