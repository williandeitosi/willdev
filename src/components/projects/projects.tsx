import { GitHub } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import { Box, CardMedia, Grid, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return (
    <Box marginTop={5}>
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
        Projetos
      </Typography>{' '}
      <Grid
        container
        marginTop={5}
        padding={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 1 },
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          lg={4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end', lg: 'center' },
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              maxWidth: 345,
              boxShadow: 10,
              borderRadius: 2,
              transition: 'transform 0.3s ease-in-out',
              padding: 2,
              ':hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <CardMedia
              component='img'
              alt='green iguana'
              height='200'
              image='/project/bs.gif'
              sx={{
                border: 1,
                borderRadius: 2,
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
            <CardContent sx={{ padding: 1.2 }}>
              <Typography gutterBottom variant='h5' component='div'>
                Landing page barbearia
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Desenvolvi uma landing page moderna e responsiva para uma
                barbearia, com foco em proporcionar uma excelente experiência de
                usuário e destacar os serviços oferecidos pela barbearia.
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                margin: 0,
                padding: 1.2,
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <CodeIcon /> React, Tailwindcss
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <GitHub />
                <Link
                  href={
                    'https://github.com/williandeitosi/landing-page-barbearia'
                  }
                  target='_blank'
                >
                  GitHub
                </Link>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <LinkIcon />
                <Link
                  href={'https://landing-page-barbearia-delta.vercel.app/'}
                  target='_blank'
                >
                  Site demo
                </Link>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          lg={4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end', lg: 'center' },
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              maxWidth: 345,
              boxShadow: 10,
              borderRadius: 2,
              transition: 'transform 0.3s ease-in-out',
              padding: 2,
              ':hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <CardMedia
              component='img'
              alt='green iguana'
              height='200'
              image='/project/blog.png'
              sx={{
                border: 1,
                borderRadius: 2,
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
            <CardContent sx={{ padding: 1.2 }}>
              <Typography gutterBottom variant='h5' component='div'>
                Meu blog
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Desenvolvendo um blog para compartilhar os meus estudos no mundo
                do desenvolvimento web. O foco destacar as melhores práticas,
                dicas e tutoriais sobre programação e design.
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                margin: 0,
                padding: 1.2,
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <CodeIcon /> React, Tailwindcss
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <GitHub />
                <Link
                  href={
                    'https://github.com/williandeitosi/landing-page-barbearia'
                  }
                  target='_blank'
                >
                  GitHub
                </Link>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <LinkIcon />
                <Link
                  href={'https://landing-page-barbearia-delta.vercel.app/'}
                  target='_blank'
                >
                  Site demo
                </Link>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
