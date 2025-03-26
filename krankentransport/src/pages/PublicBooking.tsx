import { Container, Typography, Paper, Box } from '@mui/material';

const PublicBooking = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Krankentransport Terminbuchung
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Verfügbare Termine
          </Typography>
          {/* Here we'll add the calendar component later */}
        </Paper>
      </Box>
    </Container>
  );
};

export default PublicBooking;
