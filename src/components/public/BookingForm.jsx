import React from 'react';

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Formularverarbeitung
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Buchungsformular</h2>
      {/* Formularfelder werden hier implementiert */}
    </form>
  );
};

export default BookingForm;
