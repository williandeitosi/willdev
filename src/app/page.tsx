import About from '@/components/about/about';
import { Box, Container } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <About />
      <Box sx={{ border: 1, opacity: 0.1, marginTop: 2 }}></Box>
    </Container>
  );
}
