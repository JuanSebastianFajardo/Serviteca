// ============================================================
// Serviteca ADSO – Listado de todos los carros
// ============================================================
import type React from 'react';
import DataTable from '../components/DataTable';
import { useI18n } from '../context/I18nContext';
import { getCarros } from '../utils/storage';

interface CarListProps {
  onBack: () => void;
}

export default function CarList({ onBack }: CarListProps) {
  const { t } = useI18n();
  const carros = getCarros();

  const columns = [
    { key: 'placa',  label: t('car.plate') },
    { key: 'marca',  label: t('car.brand') },
    { key: 'modelo', label: t('car.model') },
  ];

  const rows = carros.map((c) => ({
    placa:  c.placa,
    marca:  c.marca,
    modelo: c.modelo,
  }));

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.headerText}>{t('list.car.title')}</h2>
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
  card: { width: '700px', minHeight: '380px', backgroundColor: '#fff', border: '2px solid var(--color-secondary)', borderRadius: '8px', boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  header: { backgroundColor: 'var(--color-secondary)', padding: '14px 24px' },
  headerText: { color: 'var(--color-white)', fontSize: '20px', fontFamily: 'var(--font-main)', fontWeight: 'bold' },
  body: { flex: 1, padding: '20px 24px' },
  footer: { padding: '12px 24px 16px', display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #ddd' },
  btnBack: { backgroundColor: 'var(--color-white)', color: 'var(--color-secondary)', border: '2px solid var(--color-secondary)', padding: '8px 24px', fontFamily: 'var(--font-main)', fontSize: '15px', borderRadius: '6px', cursor: 'pointer' },
};
