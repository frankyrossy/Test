import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// ...existing code...
// Wrap your components with LocalizationProvider
return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    // ...existing code...
  </LocalizationProvider>
);
// ...existing code...
