import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { Login } from './pages/Login';
import { Overview } from './pages/Overview';
import { Tasks } from './pages/Tasks';
import { Calendar } from './pages/Calendar';
import { Surveys } from './pages/Surveys';
import { Notes } from './pages/Notes';
import { Chat } from './pages/Chat';
import { Settings } from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AppShell />}>
          <Route path="/" element={<Overview />} />
          <Route path="/aufgaben" element={<Tasks />} />
          <Route path="/kalender" element={<Calendar />} />
          <Route path="/umfragen" element={<Surveys />} />
          <Route path="/notizen" element={<Notes />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/einstellungen" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
