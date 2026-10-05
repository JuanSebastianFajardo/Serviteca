// ============================================================
// Serviteca ADSO – Modal reutilizable
// ============================================================
import type React from 'react';
import { useI18n } from '../context/I18nContext';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  /** 'success' | 'error' | 'info' – afecta color del título */
  variant?: 'success' | 'error' | 'info';
}

export default function Modal({
  title,
  children,
  onClose,
  variant = 'info',
}: ModalProps) {
  const { t } = useI18n();

  const titleBg =
    variant === 'error'
      ? 'var(--color-error)'
      : 'var(--color-secondary)';

  return (
    <div style={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div style={styles.card}>
        <div style={{ ...styles.header, backgroundColor: titleBg }}>
          <span id="modal-title" style={styles.headerText}>{title}</span>
        </div>
        <div style={styles.body}>{children}</div>
        <div style={styles.footer}>
          <button style={styles.btn} onClick={onClose} autoFocus>
            {t('btn.close')}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'var(--color-overlay)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  card: {
    backgroundColor: 'var(--color-white)',
    borderRadius: '8px',
    width: '420px',
    maxWidth: '92vw',
    boxShadow: 'var(--shadow)',
    overflow: 'hidden',
    fontFamily: 'var(--font-main)',
  },
  header: {
    padding: '14px 20px',
  },
  headerText: {
    color: 'var(--color-white)',
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: 'var(--font-main)',
  },
  body: {
    padding: '20px',
    color: 'var(--color-text)',
    fontSize: '15px',
    lineHeight: '1.6',
    whiteSpace: 'pre-wrap',
  },
  footer: {
    padding: '12px 20px 16px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-white)',
    padding: '8px 24px',
    fontSize: '15px',
    fontFamily: 'var(--font-main)',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};
