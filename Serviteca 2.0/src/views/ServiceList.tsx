// ============================================================
// Serviteca ADSO – Listado de todos los servicios
// ============================================================
import type React from 'react';
import DataTable from '../components/DataTable';
import { useI18n } from '../context/I18nContext';
import { getServicios } from '../utils/storage';

interface ServiceListProps {
  onBack: () => void;
}

export default function ServiceList({ onBack }: ServiceListProps) {
  const { t } = useI18n();
  const servicios = getServicios();

  const columns = [
    { key: 'placa',          label: t('query.service.col.plate') },
    { key: 'identificacion', label: t('service.clientId')        },
    { key: 'tipo',           label: t('query.service.col.type')  },
    { key: 'fecha',          label: t('query.service.col.date')  },
  ];

  const rows = servicios.map((s) => ({
    placa:          s.placa,
    identificacion: s.identificacion,
    tipo:           s.tipo,
    fecha:          s.fecha,
  }));

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.headerText}>{t('list.service.title')}</h2>
        </div>
        <div style={styles.body}>
          <DataTable columns={columns} rows={rows} />
        </div>
        <div style={styles.footer}>
          <button style={styles.btnBack} onClick={onBack}>{t('btn.back')}</button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: { display: 'flex', justifyContent: 'center', padding: '24px 0 80px' },
  card: { width: '860px', minHeight: '380px', backgroundColor: '#fff', border: '2px solid var(--color-secondary)', borderRadius: '8px', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  header: { backgroundColor: 'var(--color-secondary)', padding: '14px 24px' },
  headerText: { color: 'var(--color-white)', fontSize: '20px', fontFamily: 'var(--font-main)', fontWeight: 'bold' },
  body: { flex: 1, padding: '20px 24px' },
  footer: { padding: '12px 24px 16px', display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #ddd' },
  btnBack: { backgroundColor: 'var(--color-white)', color: 'var(--color-secondary)', border: '2px solid var(--color-secondary)', padding: '8px 24px', fontFamily: 'var(--font-main)', fontSize: '15px', borderRadius: '6px', cursor: 'pointer' },
};
