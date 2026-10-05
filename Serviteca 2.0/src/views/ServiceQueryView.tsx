// ============================================================
// Serviteca ADSO – INT-06 Consultar servicios por placa
// ============================================================
import { useState } from 'react';
import type React from 'react';
import DataTable from '../components/DataTable';
import { useI18n } from '../context/I18nContext';
import { getServiciosByPlaca } from '../utils/storage';
import type { Servicio } from '../types';

interface ServiceQueryProps {
  onBack: () => void;
}

export default function ServiceQueryView({ onBack }: ServiceQueryProps) {
  const { t } = useI18n();
  const [placa,    setPlaca]    = useState('');
  const [results,  setResults]  = useState<Servicio[] | null>(null);
  const [searched, setSearched] = useState(false);

  const handleQuery = () => {
    const found = getServiciosByPlaca(placa.trim());
    setResults(found);
    setSearched(true);
  };

  const columns = [
    { key: 'placa',  label: t('query.service.col.plate') },
    { key: 'tipo',   label: t('query.service.col.type')  },
    { key: 'fecha',  label: t('query.service.col.date')  },
  ];

  const rows = (results ?? []).map((s) => ({
    placa: s.placa,
    tipo:  s.tipo,
    fecha: s.fecha,
  }));

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {/* Encabezado */}
        <div style={styles.header}>
          <h2 style={styles.headerText}>{t('query.service.title')}</h2>
        </div>

        {/* Barra de búsqueda */}
        <div style={styles.searchRow}>
          <label htmlFor="sq-plate" style={styles.label}>
            {t('query.service.label')}
          </label>
          <div style={styles.inputRow}>
            <input
              id="sq-plate"
              style={styles.input}
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleQuery()}
            />
            <button style={styles.btnQuery} onClick={handleQuery}>
              {t('query.service.btn')}
            </button>
          </div>
        </div>

        {/* Resultados */}
        <div style={styles.results}>
          {searched && results !== null && results.length === 0 ? (
            <p style={styles.empty}>{t('query.service.empty')}</p>
          ) : results && results.length > 0 ? (
            <DataTable columns={columns} rows={rows} />
          ) : null}
        </div>

        {/* Pie */}
        <div style={styles.footer}>
          <button style={styles.btnBack} onClick={onBack}>
            {t('btn.back')}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '24px 0 80px',
  },
  card: {
    width: '700px',
    minHeight: '420px',
    backgroundColor: '#fff',
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
  searchRow: {
    padding: '20px 24px 0',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontFamily: 'var(--font-main)',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'var(--color-secondary)',
  },
  inputRow: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '8px 10px',
    border: '1.5px solid var(--color-secondary)',
    borderRadius: '4px',
    fontFamily: 'var(--font-main)',
    fontSize: '15px',
  },
  btnQuery: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-white)',
    border: 'none',
    padding: '8px 22px',
    fontFamily: 'var(--font-main)',
    fontSize: '15px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  results: {
    flex: 1,
    padding: '20px 24px',
  },
  empty: {
    fontFamily: 'var(--font-main)',
    color: 'var(--color-text)',
    fontSize: '15px',
  },
  footer: {
    padding: '12px 24px 16px',
    display: 'flex',
    justifyContent: 'flex-end',
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
};
