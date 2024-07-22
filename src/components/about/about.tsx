import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <Box marginTop={2}>
      <Grid
        container
        sx={{
          padding: 2,
          flexDirection: { xs: 'column-reverse', md: 'row' },
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          direction={'column'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              alignSelf: { xs: 'flex-start', md: 'center' },
              marginBottom: { xs: 1, md: 2 },
            }}
          >
            <Typography
              sx={{
                variant: 'h1',
                fontSize: { xs: 20, sm: 40, lg: 40 },
              }}
            >
              Willian Giovanini Dei Tosi
            </Typography>
            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
              quod quibusdam nulla dolore commodi dignissimos molestias minima
              quasi quaerat neque reprehenderit, adipisci veniam veritatis sed?
              Recusandae, maiores? Dolorem, optio soluta.
            </Typography>
            <Typography
              sx={{
                display: { xs: 'block', md: 'none' },
                opacity: 0.6,
              }}
            >
              Full Stack Developer
            </Typography>
          </Box>
          <Box alignSelf={'flex-start'} sx={{ display: 'flex', gap: 1 }}>
            <Link href={'https://github.com/williandeitosi'} target='_blank'>
              <IconButton sx={{ width: 50, height: 50 }}>
                <GitHubIcon sx={{ color: 'black', fontSize: 30 }} />
              </IconButton>
            </Link>
            <Link
              href={'https://www.linkedin.com/in/williangiovaninideitosi/'}
              target='_blank'
            >
              <IconButton sx={{ width: 50, height: 50 }}>
                <LinkedInIcon sx={{ color: 'black', fontSize: 30 }} />
              </IconButton>
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', md: 'center' },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: 90, sm: 160, md: 260 },
              height: { xs: 90, sm: 160, md: 260 },
              background: 'linear-gradient(45deg, #000, #a0a0a0)',
              marginBottom: { xs: 2, md: 0 },
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: { xs: 80, sm: 150, md: 250 },
                height: { xs: 80, sm: 150, md: 250 },
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <Image
                alt='foto'
                src={'https://avatars.githubusercontent.com/u/104787632?v=4'}
                layout='fill'
                objectFit='cover'
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}