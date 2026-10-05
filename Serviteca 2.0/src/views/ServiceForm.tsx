// ============================================================
// Serviteca ADSO – INT-05 Registrar Servicio
// ============================================================
import { useState } from 'react';
import type React from 'react';
import FormCard, { fieldStyles as fs } from '../components/FormCard';
import Modal from '../components/Modal';
import { useI18n } from '../context/I18nContext';
import { findCarroByPlaca, findClienteById, saveServicio } from '../utils/storage';
import type { Servicio, TipoServicio } from '../types';

interface ServiceFormProps {
  onBack: () => void;
}

interface FormState {
  placa: string;
  identificacion: string;
  fecha: string;
  tipo: TipoServicio;
}

const TIPOS: TipoServicio[] = [
  'Cambio de aceite',
  'Sincronización',
  'Alineación',
  'Lavado',
];

const EMPTY: FormState = {
  placa: '',
  identificacion: '',
  fecha: '',
  tipo: 'Cambio de aceite',
};

export default function ServiceForm({ onBack }: ServiceFormProps) {
  const { t } = useI18n();
  const [form, setForm]   = useState<FormState>(EMPTY);
  const [modal, setModal] = useState<{ open: boolean; ok: boolean; msg: string }>({
    open: false, ok: false, msg: '',
  });

  const setField =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = (): string | null => {
    if (!form.placa || !form.identificacion || !form.fecha || !form.tipo)
      return t('err.required');
    if (!findCarroByPlaca(form.placa))   return t('err.noPlate');
    if (!findClienteById(form.identificacion)) return t('err.noClient');
    return null;
  };

  const handleSave = () => {
    const err = validate();
    if (err) {
      setModal({ open: true, ok: false, msg: err });
      return;
    }
    const servicio: Servicio = {
      id: Date.now().toString(),
      placa: form.placa.toUpperCase(),
      identificacion: form.identificacion,
      fecha: form.fecha,
      tipo: form.tipo,
    };
    saveServicio(servicio);
    setForm(EMPTY);
    setModal({ open: true, ok: true, msg: t('modal.saved') });
  };

  // Mapeo tipo → clave i18n para el label del option
  const tipoLabel = (tipo: TipoServicio): string => {
    const map: Record<TipoServicio, string> = {
      'Cambio de aceite': t('service.type.oil'),
      'Sincronización':   t('service.type.sync'),
      'Alineación':       t('service.type.align'),
      'Lavado':           t('service.type.wash'),
    };
    return map[tipo];
  };

  return (
    <>
      <FormCard title={t('service.title')} onBack={onBack} onSave={handleSave}>
        <div style={fs.group}>
          <label htmlFor="svc-plate" style={fs.label}>{t('service.plate')}</label>
          <input id="svc-plate" style={fs.input} value={form.placa}
            onChange={setField('placa')} />
        </div>

        <div style={fs.group}>
          <label htmlFor="svc-client" style={fs.label}>{t('service.clientId')}</label>
          <input id="svc-client" style={fs.input} value={form.identificacion}
            onChange={setField('identificacion')} />
        </div>

        <div style={fs.group}>
          <label htmlFor="svc-date" style={fs.label}>{t('service.date')}</label>
          <input id="svc-date" type="date" style={fs.input} value={form.fecha}
            onChange={setField('fecha')} />
        </div>

        <div style={fs.group}>
          <label htmlFor="svc-type" style={fs.label}>{t('service.type')}</label>
          <select id="svc-type" style={fs.select} value={form.tipo}
            onChange={setField('tipo')}>
            {TIPOS.map((tipo) => (
              <option key={tipo} value={tipo}>{tipoLabel(tipo)}</option>
            ))}
          </select>
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
