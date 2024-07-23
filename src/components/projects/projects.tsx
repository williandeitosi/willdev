import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return (
    <Grid
      container
      marginTop={5}
      bgcolor={'#eee'}
      padding={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: { md: 1, lg: 0 },
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
        <Card sx={{ maxWidth: 345, border: 3 }}>
          <CardMedia
            component='img'
            alt='green iguana'
            height='200'
            image='/project/bs.gif'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        lg={4}
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start', lg: 'center' },
          alignItems: 'center',
        }}
      >
        <Card sx={{ maxWidth: 345, border: 3 }}>
          <CardMedia
            component='img'
            alt='green iguana'
            height='200'
            image='/project/bs.gif'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={4}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Card sx={{ maxWidth: 345, border: 3 }}>
          <CardMedia
            component='img'
            alt='green iguana'
            height='200'
            image='/project/bs.gif'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
