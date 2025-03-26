export const generateTimeSlots = (date, activeVehicles) => {
  const slots = [];
  const startHour = 8;
  const endHour = 20;
  
  for(let hour = startHour; hour <= endHour; hour++) {
    for(let minute = 0; minute < 60; minute += 15) {
      const time = `${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}`;
      slots.push({
        time,
        available: activeVehicles,
        booked: 0
      });
    }
  }
  return slots;
};