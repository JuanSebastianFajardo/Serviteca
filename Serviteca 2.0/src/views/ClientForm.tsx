// ============================================================
// Serviteca ADSO – INT-03 Registrar Cliente
// ============================================================
import { useState } from 'react';
import type React from 'react';
import FormCard, { fieldStyles as fs } from '../components/FormCard';
import Modal from '../components/Modal';
import { useI18n } from '../context/I18nContext';
import { getClientes, saveCliente } from '../utils/storage';
import type { Cliente } from '../types';

interface ClientFormProps {
  onBack: () => void;
}

const EMPTY: Cliente = {
  identificacion: '',
  nombres: '',
  apellidos: '',
  correo: '',
  celular: '',
};

export default function ClientForm({ onBack }: ClientFormProps) {
  const { t } = useI18n();
  const [form, setForm]       = useState<Cliente>(EMPTY);
  const [modal, setModal]     = useState<{ open: boolean; ok: boolean; msg: string }>({
    open: false, ok: false, msg: '',
  });

  const set = (field: keyof Cliente) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = (): string | null => {
    const { identificacion, nombres, apellidos, correo, celular } = form;
    if (!identificacion || !nombres || !apellidos || !correo || !celular)
      return t('err.required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo))
      return t('err.email');
    if (!/^\d+$/.test(celular))
      return t('err.phone');
    const exists = getClientes().some((c) => c.identificacion === identificacion);
    if (exists) return t('err.dupId');
    return null;
  };

  const handleSave = () => {
    const err = validate();
    if (err) {
      setModal({ open: true, ok: false, msg: err });
      return;
    }
    saveCliente({ ...form });
    setForm(EMPTY);
    setModal({ open: true, ok: true, msg: t('modal.saved') });
  };

  const closeModal = () => {
    setModal((p) => ({ ...p, open: false }));
  };

  return (
    <>
      <FormCard
        title={t('client.title')}
        onBack={onBack}
        onSave={handleSave}
      >
        <div style={fs.group}>
          <label htmlFor="c-id" style={fs.label}>{t('client.id')}</label>
          <input id="c-id" style={fs.input} value={form.identificacion}
            onChange={set('identificacion')} />
        </div>

        <div style={fs.group}>
          <label htmlFor="c-names" style={fs.label}>{t('client.names')}</label>
          <input id="c-names" style={fs.input} value={form.nombres}
            onChange={set('nombres')} />
        </div>

        <div style={fs.group}>
          <label htmlFor="c-last" style={fs.label}>{t('client.lastnames')}</label>
          <input id="c-last" style={fs.input} value={form.apellidos}
            onChange={set('apellidos')} />
        </div>

        <div style={fs.group}>
          <label htmlFor="c-email" style={fs.label}>{t('client.email')}</label>
          <input id="c-email" type="email" style={fs.input} value={form.correo}
            onChange={set('correo')} />
        </div>

        <div style={fs.group}>
          <label htmlFor="c-phone" style={fs.label}>{t('client.phone')}</label>
          <input id="c-phone" style={fs.input} value={form.celular}
            onChange={set('celular')} inputMode="numeric" />
        </div>
      </FormCard>

      {modal.open && (
        <Modal
          title={modal.ok ? t('modal.success') : t('modal.error')}
          variant={modal.ok ? 'success' : 'error'}
          onClose={closeModal}
        >
          <p>{modal.msg}</p>
        </Modal>
      )}
    </>
  );
}
