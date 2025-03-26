import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicCalendar from './components/public/Calendar';
import AdminDashboard from './components/admin/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicCalendar />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}