// src/pages/Home.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box, Grid, Typography, Button, Paper } from '@mui/material';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Generiere Zeit-Slots von 08:00 bis 17:45 in 15-Minuten-Schritten
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        if (hour === 17 && minute > 45) break;
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Krankentransport Terminbuchung
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Datum auswählen
        </Typography>
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={['day']}
            disablePast
            onChange={(newDate) => setSelectedDate(newDate)}
          />
        </LocalizationProvider>
      </Paper>

      {selectedDate && (
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Uhrzeit auswählen für {selectedDate.format('DD.MM.YYYY')}
          </Typography>
          
          <Grid container spacing={2}>
            {timeSlots.map((time) => (
              <Grid item xs={3} key={time}>
                <Button
                  fullWidth
                  variant={selectedTime === time ? 'contained' : 'outlined'}
                  onClick={() => setSelectedTime(time)}
                  sx={{ py: 2 }}
                >
                  {time}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

// Render die Komponente
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

export default Home;