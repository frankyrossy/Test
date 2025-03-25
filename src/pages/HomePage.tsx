import React, { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';
import BookingForm from '../components/BookingForm';

const HomePage: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="home-page">
      <h1>Fahrdienst Terminbuchung</h1>
      <Calendar 
        onSlotSelect={(date) => {
          setSelectedSlot(date);
          setShowBookingForm(true);
        }}
      />
      {showBookingForm && selectedSlot && (
        <BookingForm 
          selectedTime={selectedSlot}
          onClose={() => setShowBookingForm(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
