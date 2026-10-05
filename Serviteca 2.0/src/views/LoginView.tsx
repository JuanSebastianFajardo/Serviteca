// ============================================================
// Serviteca ADSO – INT-01 Inicio de sesión
// Credenciales: usuario "admin" / contraseña "1234"
// ============================================================
import { useState } from 'react';
import type React from 'react';
import Logo from '../components/Logo';
import Modal from '../components/Modal';
import BottomMenu from '../components/BottomMenu';
import { useI18n } from '../context/I18nContext';
import { setSession } from '../utils/storage';

// ── Credenciales de prueba (hardcoded, sin backend) ───────────────────────────
// usuario: admin  |  contraseña: 1234
const VALID_USER = 'admin';
const VALID_PASS = '1234';

interface LoginViewProps {
  onLogin: () => void;
}

export default function LoginView({ onLogin }: LoginViewProps) {
  const { t } = useI18n();

  const [user, setUser]       = useState('');
  const [pass, setPass]       = useState('');
  const [error, setError]     = useState('');
  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotField, setForgotField] = useState('');
  const [forgotOk, setForgotOk] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === VALID_USER && pass === VALID_PASS) {
      setError('');
      setSession(user);
      onLogin();
    } else {
      setError(t('login.error'));
    }
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotOk(true);
  };

  return (
    <div style={styles.page}>
      <Logo />

      {/* Recuadro de login 400 × 400 px */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>{t('login.title')}</h2>
        </div>

        <form onSubmit={handleLogin} style={styles.form} noValidate>
          {/* Usuario */}
          <div style={styles.group}>
            <label htmlFor="login-user" style={styles.label}>
              {t('login.user')}
            </label>
            <input
              id="login-user"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              style={styles.input}
              autoComplete="username"
              autoFocus
            />
          </div>

          {/* Contraseña */}
          <div style={styles.group}>
            <label htmlFor="login-pass" style={styles.label}>
              {t('login.password')}
            </label>
            <input
              id="login-pass"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              style={styles.input}
              autoComplete="current-password"
            />
          </div>

          {/* Error */}
          {error && <p style={styles.error} role="alert">{error}</p>}

          {/* Botón Ingresar */}
          <button type="submit" style={styles.btnLogin}>
            {t('login.btn')}
          </button>

          {/* Enlace recuperar contraseña */}
          <div style={styles.forgotWrap}>
            <button
              type="button"
              style={styles.forgotLink}
              onClick={() => { setForgotOpen(true); setForgotOk(false); setForgotField(''); }}
            >
              {t('login.forgot')}
            </button>
          </div>
        </form>
      </div>

      {/* Modal recuperar contraseña */}
      {forgotOpen && (
        <Modal
          title={t('login.forgot.title')}
          onClose={() => setForgotOpen(false)}
          variant="info"
        >
          {forgotOk ? (
            <p>{t('login.forgot.ok')}</p>
          ) : (
            <form onSubmit={handleForgot}>
              <div style={styles.group}>
                <label htmlFor="forgot-field" style={styles.label}>
                  {t('login.forgot.field')}
                </label>
                <input
                  id="forgot-field"
                  type="text"
                  value={forgotField}
                  onChange={(e) => setForgotField(e.target.value)}
                  style={styles.input}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                <button type="submit" style={styles.btnLogin}>
                  {t('login.forgot.btn')}
                </button>
              </div>
            </form>
          )}
        </Modal>
      )}

      <BottomMenu />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: 'var(--color-bg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '48px', // espacio para BottomMenu
  },
  card: {
    width: '400px',
    height: '400px',
    backgroundColor: 'var(--color-white)',
    border: '2px solid var(--color-secondary)',
    borderRadius: '8px',
    boxShadow: 'var(--shadow)',
    overflow: 'hidden',
    marginTop: '32px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    backgroundColor: 'var(--color-secondary)',
    padding: '14px 24px',
  },
  cardTitle: {
    color: 'var(--color-white)',
    fontFamily: 'var(--font-main)',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
  },
  group: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontFamily: 'var(--font-main)',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'var(--color-secondary)',
  },
  input: {
    width: '100%',
    padding: '8px 10px',
    border: '1.5px solid var(--color-secondary)',
    borderRadius: '4px',
    fontFamily: 'var(--font-main)',
    fontSize: '15px',
    color: 'var(--color-text)',
    backgroundColor: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
  },
  error: {
    color: 'var(--color-error)',
    fontFamily: 'var(--font-main)',
    fontSize: '13px',
    marginBottom: '10px',
  },
  btnLogin: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-white)',
    border: 'none',
    padding: '10px 0',
    fontFamily: 'var(--font-main)',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '4px',
  },
  forgotWrap: {
    textAlign: 'center',
    marginTop: '12px',
  },
  forgotLink: {
    background: 'none',
    border: 'none',
    color: 'var(--color-primary)',
    fontFamily: 'var(--font-main)',
    fontSize: '13px',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: 0,
  },
};
