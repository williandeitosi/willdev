import { Copyright } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        display: 'block',
        width: '100%',
        padding: '10px 0',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
      }}
    >
      <Typography
        color='textSecondary'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Copyright sx={{ fontSize: 14 }} /> Willian Giovanini Dei Tosi - 2024
      </Typography>
    </Box>
  );
}
