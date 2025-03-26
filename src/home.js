const { React, ReactDOM } = window;
const MaterialUI = window['MaterialUI'];
const MuiXDatePickers = window['MuiXDatePickers'];
const dayjs = window.dayjs;

const { LocalizationProvider, DateCalendar } = MuiXDatePickers;
const AdapterDayjs = MuiXDatePickers.AdapterDayjs;

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
        </LocalizationProvider>
    );
}

const root = ReactDOM
.createRoot(document.getElementById('root'));
root.render(<App />);