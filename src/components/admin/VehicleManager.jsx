import React from 'react';
import { doc, updateDoc } from 'firebase/firestore';

const toggleVehicle = async (vehicleId, isActive) => {
  const vehicleRef = doc(db, 'vehicles', vehicleId);
  await updateDoc(vehicleRef, { isActive: !isActive });
};
const VehicleManager = () => {
  return (
    <div className="vehicle-manager">
      <h2>Fahrzeugverwaltung</h2>
      {/* Fahrzeugverwaltungslogik wird hier implementiert */}
    </div>
  );
};

export default VehicleManager;
