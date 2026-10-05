// ============================================================
// Serviteca ADSO – INT-04 Registrar Carro
// ============================================================
import { useState } from 'react';
import type React from 'react';
import FormCard, { fieldStyles as fs } from '../components/FormCard';
import Modal from '../components/Modal';
import { useI18n } from '../context/I18nContext';
import { getCarros, saveCarro } from '../utils/storage';
import type { Carro } from '../types';

interface CarFormProps {
  onBack: () => void;
}

const EMPTY: Carro = { placa: '', marca: '', modelo: '' };

export default function CarForm({ onBack }: CarFormProps) {
  const { t } = useI18n();
  const [form, setForm]   = useState<Carro>(EMPTY);
  const [modal, setModal] = useState<{ open: boolean; ok: boolean; msg: string }>({
    open: false, ok: false, msg: '',
  });

  const set = (field: keyof Carro) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = (): string | null => {
    if (!form.placa || !form.marca || !form.modelo) return t('err.required');
    const exists = getCarros().some(
      (c) => c.placa.toUpperCase() === form.placa.toUpperCase(),
    );
    if (exists) return t('err.dupPlate');
    return null;
  };

  const handleSave = () => {
    const err = validate();
    if (err) {
      setModal({ open: true, ok: false, msg: err });
      return;
    }
    saveCarro({ ...form, placa: form.placa.toUpperCase() });
    setForm(EMPTY);
    setModal({ open: true, ok: true, msg: t('modal.saved') });
  };

  return (
    <>
      <FormCard title={t('car.title')} onBack={onBack} onSave={handleSave}>
        <div style={fs.group}>
          <label htmlFor="car-plate" style={fs.label}>{t('car.plate')}</label>
          <input id="car-plate" style={fs.input} value={form.placa}
            onChange={set('placa')} />
        </div>

        <div style={fs.group}>
          <label htmlFor="car-brand" style={fs.label}>{t('car.brand')}</label>
          <input id="car-brand" style={fs.input} value={form.marca}
            onChange={set('marca')} />
        </div>

        <div style={fs.group}>
          <label htmlFor="car-model" style={fs.label}>{t('car.model')}</label>
          <input id="car-model" style={fs.input} value={form.modelo}
            onChange={set('modelo')} />
        </div>
      </FormCard>

      {modal.open && (
        <Modal
          title={modal.ok ? t('modal.success') : t('modal.error')}
          variant={modal.ok ? 'success' : 'error'}
          onClose={() => setModal((p) => ({ ...p, open: false }))}
        >
          <p>{modal.msg}</p>
        </Modal>
      )}
    </>
  );
}
