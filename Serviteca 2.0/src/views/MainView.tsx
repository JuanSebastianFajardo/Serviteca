// ============================================================
// Serviteca ADSO – INT-02 Pantalla principal
// Contenedor que renderiza el menú y la sub-vista activa
// ============================================================
import { useState } from 'react';
import type React from 'react';
import Logo from '../components/Logo';
import MenuBar from '../components/MenuBar';
import BottomMenu from '../components/BottomMenu';
import { clearSession } from '../utils/storage';
import type { Screen } from '../types';

// Sub-vistas
import ClientForm     from './ClientForm';
import CarForm        from './CarForm';
import ServiceForm    from './ServiceForm';
import ServiceQuery   from './ServiceQueryView';
import ClientQuery    from './ClientQuery';
import CarQuery       from './CarQuery';
import ClientList     from './ClientList';
import CarList        from './CarList';
import ServiceList    from './ServiceList';

interface MainViewProps {
  onLogout: () => void;
}

export default function MainView({ onLogout }: MainViewProps) {
  const [screen, setScreen] = useState<Screen>('main');

  const navigate = (s: Screen) => setScreen(s);
  const goMain   = () => setScreen('main');

  const handleExit = () => {
    // Intentar cerrar la ventana del navegador
    window.close();
    // Fallback: volver al login y limpiar sesión
    clearSession();
    onLogout();
  };

  const renderContent = () => {
    switch (screen) {
      case 'clientForm':    return <ClientForm  onBack={goMain} />;
      case 'clientQuery':   return <ClientQuery  onBack={goMain} />;
      case 'clientList':    return <ClientList   onBack={goMain} />;
      case 'carForm':       return <CarForm      onBack={goMain} />;
      case 'carQuery':      return <CarQuery     onBack={goMain} />;
      case 'carList':       return <CarList      onBack={goMain} />;
      case 'serviceForm':   return <ServiceForm  onBack={goMain} />;
      case 'serviceQuery':  return <ServiceQuery onBack={goMain} />;
      case 'serviceList':   return <ServiceList  onBack={goMain} />;
      default:              return <Welcome />;
    }
  };

  return (
    <div style={styles.page}>
      <Logo />
      <MenuBar onNavigate={navigate} onExit={handleExit} />

      <main style={styles.content}>
        {renderContent()}
      </main>

      <BottomMenu />
    </div>
  );
}

function Welcome() {
  const { t } = useI18n();
  return (
    <div style={wStyles.wrapper}>
      {/* Ilustración SVG de auto */}
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="72" viewBox="0 0 120 72" aria-hidden="true">
        <rect x="10" y="30" width="100" height="30" rx="8" fill="#2E7D32"/>
        <rect x="25" y="18" width="65" height="22" rx="6" fill="#4CAF50"/>
        <rect x="30" y="20" width="25" height="16" rx="3" fill="#B2DFDB" opacity="0.8"/>
        <rect x="62" y="20" width="22" height="16" rx="3" fill="#B2DFDB" opacity="0.8"/>
        <circle cx="30" cy="60" r="10" fill="#212121"/>
        <circle cx="30" cy="60" r="5"  fill="#9E9E9E"/>
        <circle cx="90" cy="60" r="10" fill="#212121"/>
        <circle cx="90" cy="60" r="5"  fill="#9E9E9E"/>
        <rect x="0"  y="42" width="12" height="8" rx="2" fill="#FFD54F"/>
        <rect x="108" y="42" width="12" height="8" rx="2" fill="#EF5350"/>
      </svg>

      <h2 style={wStyles.title}>{t('main.welcome')}</h2>
      <p  style={wStyles.sub}>{t('main.subtitle')}</p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: 'var(--color-bg)',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '48px',
  },
  content: {
    flex: 1,
    padding: '0 24px',
  },
};

const wStyles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '60px',
    gap: '16px',
  },
  title: {
    fontFamily: 'var(--font-main)',
    fontSize: '26px',
    color: 'var(--color-primary)',
    fontWeight: 'bold',
  },
  sub: {
    fontFamily: 'var(--font-main)',
    fontSize: '16px',
    color: 'var(--color-text)',
  },
};
