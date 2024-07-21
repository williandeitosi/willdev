import Header from '@/components/header/header';
import { Container, Grid } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <Container>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1>hello</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, quod
            quibusdam nulla dolore commodi dignissimos molestias minima quasi
            quaerat neque reprehenderit, adipisci veniam veritatis sed?
            Recusandae, maiores? Dolorem, optio soluta.
          </p>
          <button>cv</button>
          <button>contato</button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            alt='foto'
            src={'https://avatars.githubusercontent.com/u/104787632?v=4'}
            width={300}
            height={300}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
