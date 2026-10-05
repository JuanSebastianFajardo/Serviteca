// ============================================================
// Serviteca ADSO – Tarjeta de formulario 600 × 500 px
// Título en fondo caoba, contenido con padding, pie con botones
// ============================================================
import type React from 'react';
import { useI18n } from '../context/I18nContext';

interface FormCardProps {
  title: string;
  children: React.ReactNode;
  onBack: () => void;
  onSave: () => void;
  /** Deshabilitar botón Guardar mientras se procesa */
  saving?: boolean;
}

export default function FormCard({
  title,
  children,
  onBack,
  onSave,
  saving = false,
}: FormCardProps) {
  const { t } = useI18n();
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {/* Encabezado caoba */}
        <div style={styles.header}>
          <h2 style={styles.headerText}>{title}</h2>
        </div>

        {/* Cuerpo */}
        <div style={styles.body}>{children}</div>

        {/* Pie */}
        <div style={styles.footer}>
          <button style={styles.btnBack} onClick={onBack} type="button">
            {t('btn.back')}
          </button>
          <button
            style={styles.btnSave}
            onClick={onSave}
            type="button"
            disabled={saving}
          >
            {t('btn.save')}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Estilos de campo reutilizables (exportados para las vistas) ──────────────

export const fieldStyles: Record<string, React.CSSProperties> = {
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
  },
  select: {
    width: '100%',
    padding: '8px 10px',
    border: '1.5px solid var(--color-secondary)',
    borderRadius: '4px',
    fontFamily: 'var(--font-main)',
    fontSize: '15px',
    color: 'var(--color-text)',
    backgroundColor: '#fff',
    outline: 'none',
  },
};

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '24px 0 80px',
  },
  card: {
    width: '600px',
    minHeight: '500px',
    backgroundColor: 'var(--color-white)',
    border: '2px solid var(--color-secondary)',
    borderRadius: '8px',
    boxShadow: 'var(--shadow)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    fontFamily: 'var(--font-main)',
  },
  header: {
    backgroundColor: 'var(--color-secondary)',
    padding: '14px 24px',
  },
  headerText: {
    color: 'var(--color-white)',
    fontSize: '20px',
    fontFamily: 'var(--font-main)',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: '24px',
  },
  footer: {
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    borderTop: '1px solid #ddd',
  },
  btnBack: {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-secondary)',
    border: '2px solid var(--color-secondary)',
    padding: '8px 24px',
    fontFamily: 'var(--font-main)',
    fontSize: '15px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  btnSave: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-white)',
    border: 'none',
    padding: '8px 28px',
    fontFamily: 'var(--font-main)',
    fontSize: '15px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};
