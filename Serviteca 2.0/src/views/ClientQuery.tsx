// ============================================================
// Serviteca ADSO – Consultar Cliente por identificación
// ============================================================
import { useState } from 'react';
import type React from 'react';
import { useI18n } from '../context/I18nContext';
import { findClienteById } from '../utils/storage';
import type { Cliente } from '../types';

interface ClientQueryProps {
  onBack: () => void;
}

export default function ClientQuery({ onBack }: ClientQueryProps) {
  const { t } = useI18n();
  const [query,    setQuery]    = useState('');
  const [result,   setResult]   = useState<Cliente | null | undefined>(undefined);

  const handleSearch = () => {
    const found = findClienteById(query.trim());
    setResult(found ?? null);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.headerText}>{t('query.client.title')}</h2>
        </div>

        <div style={styles.body}>
          <div style={styles.searchRow}>
            <label htmlFor="cq-id" style={styles.label}>
              {t('query.client.label')}
            </label>
            <div style={styles.inputRow}>
              <input
                id="cq-id"
                style={styles.input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button style={styles.btnSearch} onClick={handleSearch}>
                {t('query.client.btn')}
              </button>
            </div>
          </div>

          {/* Resultado */}
          {result === null && (
            <p style={styles.empty}>{t('query.client.empty')}</p>
          )}
          {result && (
            <div style={styles.resultCard}>
              <Row label={t('client.id')}        value={result.identificacion} />
              <Row label={t('client.names')}     value={result.nombres}       />
              <Row label={t('client.lastnames')} value={result.apellidos}     />
              <Row label={t('client.email')}     value={result.correo}        />
              <Row label={t('client.phone')}     value={result.celular}       />
            </div>
          )}
        </div>

        <div style={styles.footer}>
          <button style={styles.btnBack} onClick={onBack}>
            {t('btn.back')}
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '7px 0' }}>
      <span style={{ fontWeight: 'bold', width: '200px', color: 'var(--color-secondary)', fontFamily: 'var(--font-main)' }}>
        {label}
      </span>
      <span style={{ fontFamily: 'var(--font-main)', color: 'var(--color-text)' }}>{value}</span>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: { display: 'flex', justifyContent: 'center', padding: '24px 0 80px' },
  card: {
    width: '620px',
    minHeight: '380px',
    backgroundColor: '#fff',
    border: '2px solid var(--color-secondary)',
    borderRadius: '8px',
    boxShadow: 'var(--shadow)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    fontFamily: 'var(--font-main)',
  },
  header: { backgroundColor: 'var(--color-secondary)', padding: '14px 24px' },
  headerText: { color: 'var(--color-white)', fontSize: '20px', fontFamily: 'var(--font-main)', fontWeight: 'bold' },
  body: { flex: 1, padding: '20px 24px' },
  searchRow: { marginBottom: '20px' },
  label: { display: 'block', marginBottom: '6px', fontFamily: 'var(--font-main)', fontSize: '14px', fontWeight: 'bold', color: 'var(--color-secondary)' },
  inputRow: { display: 'flex', gap: '10px' },
  input: { flex: 1, padding: '8px 10px', border: '1.5px solid var(--color-secondary)', borderRadius: '4px', fontFamily: 'var(--font-main)', fontSize: '15px' },
  btnSearch: { backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', border: 'none', padding: '8px 22px', fontFamily: 'var(--font-main)', fontSize: '15px', borderRadius: '6px', cursor: 'pointer' },
  empty: { fontFamily: 'var(--font-main)', color: 'var(--color-text)', fontSize: '15px' },
  resultCard: { backgroundColor: '#fafafa', border: '1px solid #ddd', borderRadius: '6px', padding: '14px 18px' },
  footer: { padding: '12px 24px 16px', display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #ddd' },
  btnBack: { backgroundColor: 'var(--color-white)', color: 'var(--color-secondary)', border: '2px solid var(--color-secondary)', padding: '8px 24px', fontFamily: 'var(--font-main)', fontSize: '15px', borderRadius: '6px', cursor: 'pointer' },
};
