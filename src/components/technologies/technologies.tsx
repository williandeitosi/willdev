import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import TECHS from './techs';

export default function Technologies() {
  return (
    <Box
      sx={{
        marginTop: 5,
      }}
    >
      <Typography
        variant='h3'
        fontSize={28}
        marginBottom={5}
        sx={{
          fontSize: { xs: 24, sm: 28 },
          marginBottom: 5,
          textAlign: { xs: 'center', sm: 'start' },
        }}
      >
        Tecnologias
      </Typography>
      <Grid
        container
        gap={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {TECHS.map((tech, index) => (
          <Grid
            item
            xs={4}
            sm={2}
            lg={1}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              boxShadow: 3,
              borderRadius: 3,
              height: 70,
              ':hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Image src={tech.src} alt={tech.alt} width={40} height={40} />
            <Typography component='span' sx={{ opacity: 0.6 }}>
              {tech.alt}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
