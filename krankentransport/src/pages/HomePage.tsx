import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2 }}>
        <Container>
          <Typography variant="h4">Krankentransport Online-Buchung</Typography>
        </Container>
      </Box>

      {/* Hero Section */}
      <Container sx={{ mt: 8, mb: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Krankentransport einfach online buchen
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Schnell und unkompliziert Ihren Krankentransport-Termin vereinbaren
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            onClick={() => navigate('/booking')}
            sx={{ mt: 4 }}
          >
            Jetzt Termin buchen
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
