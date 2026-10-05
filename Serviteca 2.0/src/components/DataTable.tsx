// ============================================================
// Serviteca ADSO – Tabla de datos genérica
// Encabezado caoba con texto blanco, filas alternas
// ============================================================
import type React from 'react';
import { useI18n } from '../context/I18nContext';

export interface Column {
  key: string;
  label: string;
}

interface DataTableProps {
  columns: Column[];
  rows: Record<string, string>[];
  emptyMessage?: string;
}

export default function DataTable({ columns, rows, emptyMessage }: DataTableProps) {
  const { t } = useI18n();
  const empty = emptyMessage ?? t('list.empty');

  return (
    <div style={styles.wrapper}>
      {rows.length === 0 ? (
        <p style={styles.empty}>{empty}</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} style={styles.th}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#F9F9F9' }}>
                {columns.map((col) => (
                  <td key={col.key} style={styles.td}>
                    {row[col.key] ?? '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'var(--font-main)',
    fontSize: '15px',
  },
  th: {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-white)',
    padding: '10px 14px',
    textAlign: 'left',
    fontFamily: 'var(--font-main)',
    fontWeight: 'bold',
    borderBottom: '2px solid #6a2a12',
  },
  td: {
    padding: '9px 14px',
    color: 'var(--color-text)',
    borderBottom: '1px solid #e0e0e0',
    fontFamily: 'var(--font-main)',
  },
  empty: {
    fontFamily: 'var(--font-main)',
    color: 'var(--color-text)',
    fontSize: '15px',
    padding: '16px 0',
    textAlign: 'center',
  },
};
