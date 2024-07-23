import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

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
      <Grid container rowSpacing={3}>
        <Grid sm={2} md={1} xs={4} item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src='/techs/html5.png' alt='js' width={40} height={40} />
          </Box>
        </Grid>
        <Grid sm={2} md={1} xs={4} item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src='/techs/css3.png' alt='js' width={40} height={40} />
          </Box>
        </Grid>
        <Grid sm={2} md={1} xs={4} item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src='/techs/js.png' alt='js' width={40} height={40} />
          </Box>
        </Grid>
        <Grid sm={2} md={1} xs={4} item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src='/techs/ts.png' alt='js' width={40} height={40} />
          </Box>
        </Grid>
        <Grid sm={2} md={1} xs={4} item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src='/techs/react.png' alt='js' width={40} height={40} />
          </Box>
        </Grid>
        <Grid sm={2} md={1} xs={4} item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src='/techs/nextjs.png' alt='js' width={40} height={40} />
          </Box>
        </Grid>
        <Grid sm={4} md={1} xs={4} item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-end', md: 'center' },
              alignItems: 'center',
            }}
          >
            <Image src='/techs/nestjs.png' alt='js' width={40} height={40} />
          </Box>
        </Grid>
        <Grid sm={4} md={1} xs={4} item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src='/techs/tailwind.png' alt='js' width={40} height={40} />
          </Box>
        </Grid>
        <Grid sm={4} md={1} xs={4} item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start', md: 'center' },
              alignItems: 'center',
            }}
          >
            <Image src='/techs/jest.png' alt='js' width={40} height={40} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
