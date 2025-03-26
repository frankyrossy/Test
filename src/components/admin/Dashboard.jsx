import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

const handleLogin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login fehlgeschlagen:", error.message);
  }
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Mitarbeiter-Dashboard</h1>
      <nav>
        <ul>
          <li>Terminübersicht</li>
          <li>Verteilungszentrale</li>
          <li>Fahrzeugverwaltung</li>
          <li>Einstellungen</li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
