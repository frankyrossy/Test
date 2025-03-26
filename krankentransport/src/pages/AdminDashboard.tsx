import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Terminübersicht" />
          <Tab label="Verteilungszentrale" />
          <Tab label="Fahrzeugverwaltung" />
          <Tab label="Einstellungen" />
        </Tabs>
      </Box>

      <TabPanel value={activeTab} index={0}>
        <h2>Terminübersicht</h2>
        {/* Hier kommt der Kalender und die Filterfunktionen */}
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        <h2>Verteilungszentrale</h2>
        {/* Hier kommt die Verteilungslogik */}
      </TabPanel>

      <TabPanel value={activeTab} index={2}>
        <h2>Fahrzeugverwaltung</h2>
        {/* Hier kommt die Fahrzeugverwaltung */}
      </TabPanel>

      <TabPanel value={activeTab} index={3}>
        <h2>Einstellungen</h2>
        {/* Hier kommen die Einstellungen */}
      </TabPanel>
    </Box>
  );
}
