// ============================================================
// Serviteca ADSO – Raíz de la aplicación
// Maneja autenticación y renderiza LoginView o MainView
// ============================================================
import { useState } from 'react';
import { I18nProvider } from './context/I18nContext';
import LoginView from './views/LoginView';
import MainView  from './views/MainView';
import { getSession, clearSession } from './utils/storage';

export default function App() {
  // Conservar sesión activa tras recargar la página
  const [authed, setAuthed] = useState<boolean>(() => !!getSession());

  const handleLogin  = () => setAuthed(true);
  const handleLogout = () => { clearSession(); setAuthed(false); };

  return (
    <I18nProvider>
      {authed
        ? <MainView  onLogout={handleLogout} />
        : <LoginView onLogin={handleLogin}   />
      }
    </I18nProvider>
  );
}
