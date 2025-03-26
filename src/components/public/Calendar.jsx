import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';

useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, 'appointments'), (snapshot) => {
    const updatedAppointments = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setAppointments(updatedAppointments);
  });

  return () => unsubscribe();
}, []);