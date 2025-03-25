import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box,
  Paper
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportIcon from '@mui/icons-material/Support';
import PhoneIcon from '@mui/icons-material/Phone';

const HomePage = () => {
  return (
    <div>
      {/* Header/Navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Krankentransport Service
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/booking">Termin buchen</Button>
          <Button color="inherit">Über uns</Button>
          <Button color="inherit">Kontakt</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://source.unsplash.com/random/?ambulance)',
          height: '500px'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                pt: { md: 12 }
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Zuverlässiger Krankentransport
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Sicher, komfortabel und pünktlich an Ihr Ziel. Unser professionelles Team kümmert sich um Ihren Transport.
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                component={Link} 
                to="/booking" 
                sx={{ mt: 2, bgcolor: '#f50057', '&:hover': { bgcolor: '#c51162' } }}
              >
                Jetzt Termin buchen
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Services Section */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Unsere Leistungen
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Wir bieten professionellen Krankentransport für verschiedene Bedürfnisse
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="div"
                sx={{ pt: '56.25%', bgcolor: '#1976d2' }}
              >
                <DirectionsCarIcon sx={{ 
                  fontSize: 80, 
                  color: 'white',
                  position: 'absolute',
                  top: '50%',
                  left: '50%', 
                  transform: 'translate(-50%, -50%)'
                }} />
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Komfortabler Transport
                </Typography>
                <Typography>
                  Unsere Fahrzeuge sind speziell ausgestattet, um maximalen Komfort und Sicherheit während des Transports zu gewährleisten.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="div"
                sx={{ pt: '56.25%', bgcolor: '#f50057' }}
              >
                <AccessTimeIcon sx={{ 
                  fontSize: 80, 
                  color: 'white',
                  position: 'absolute',
                  top: '50%',
                  left: '50%', 
                  transform: 'translate(-50%, -50%)'
                }} />
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Pünktlicher Service
                </Typography>
                <Typography>
                  Wir verstehen die Wichtigkeit von Terminen und sorgen dafür, dass Sie pünktlich an Ihrem Ziel ankommen.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="div"
                sx={{ pt: '56.25%', bgcolor: '#4caf50' }}
              >
                <SupportIcon sx={{ 
                  fontSize: 80, 
                  color: 'white',
                  position: 'absolute',
                  top: '50%',
                  left: '50%', 
                  transform: 'translate(-50%, -50%)'
                }} />
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Unterstützung und Betreuung
                </Typography>
                <Typography>
                  Unser geschultes Personal steht Ihnen während des gesamten Transports zur Seite und unterstützt Sie nach Bedarf.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Benötigen Sie einen Krankentransport?
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
            Buchen Sie Ihren Termin einfach und schnell online.
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              component={Link} 
              to="/booking"
              sx={{ mr: 2 }}
            >
              Termin buchen
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large" 
              startIcon={<PhoneIcon />}
              href="tel:+4912345678"
            >
              Anrufen
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Krankentransport Service
              </Typography>
              <Typography variant="body2">
                Wir sind Ihr verlässlicher Partner für sichere und komfortable Krankentransporte.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Kontakt
              </Typography>
              <Typography variant="body2">
                Musterstraße 123<br />
                12345 Musterstadt<br />
                Tel: 0123 - 456789<br />
                Email: info@krankentransport.de
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Öffnungszeiten
              </Typography>
              <Typography variant="body2">
                Montag - Freitag: 8:00 - 18:00 Uhr<br />
                Samstag: 9:00 - 14:00 Uhr<br />
                Sonntag: Geschlossen
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Rechtliches
              </Typography>
              <Typography variant="body2">
                Impressum<br />
                Datenschutz<br />
                AGB
              </Typography>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" align="center">
              © {new Date().getFullYear()} Krankentransport Service. Alle Rechte vorbehalten.
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default HomePage;