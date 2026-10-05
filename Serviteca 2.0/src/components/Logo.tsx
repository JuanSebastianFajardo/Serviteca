// ============================================================
// Serviteca ADSO – Logo + título de la aplicación
// Aparece centrado en la parte superior de TODAS las pantallas
// ============================================================
import type React from 'react';
import { useI18n } from '../context/I18nContext';

export default function Logo() {
  const { t } = useI18n();
  return (
    <div style={styles.wrapper}>
      {/* SVG de llave inglesa (wrench) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        aria-label="Logo Serviteca"
        style={styles.svg}
      >
        {/* Mango */}
        <rect x="4" y="20" width="28" height="8" rx="4" fill="#2E7D32" />
        {/* Cabeza de la llave */}
        <circle cx="38" cy="24" r="9" fill="none" stroke="#2E7D32" strokeWidth="4" />
        <circle cx="38" cy="24" r="4" fill="#2E7D32" />
        {/* Cuerpo del auto sobre la llave – rectángulo pequeño */}
        <rect x="13" y="14" width="14" height="6" rx="2" fill="#8B3A1E" />
        <rect x="10" y="18" width="20" height="5" rx="1" fill="#8B3A1E" />
      </svg>
      <h1 style={styles.title}>{t('app.title')}</h1>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '18px 0 12px',
    backgroundColor: 'var(--color-bg)',
  },
  svg: {
    flexShrink: 0,
  },
  title: {
    fontFamily: 'var(--font-main)',
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'var(--color-primary)',
    letterSpacing: '1px',
  },
};
