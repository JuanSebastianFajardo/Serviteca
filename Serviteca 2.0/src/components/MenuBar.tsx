// ============================================================
// Serviteca ADSO – Barra de menú horizontal (INT-02)
// Verde #2E7D32, submenús desplegables, modal de Ayuda
// ============================================================
import { useState } from 'react';
import type React from 'react';
import { useI18n } from '../context/I18nContext';
import Modal from './Modal';
import type { Screen } from '../types';

interface MenuBarProps {
  onNavigate: (screen: Screen) => void;
  onExit: () => void;
}

type MenuKey = 'clients' | 'cars' | 'services' | 'help' | null;

interface SubItem {
  label: string;
  screen: Screen;
}

export default function MenuBar({ onNavigate, onExit }: MenuBarProps) {
  const { t } = useI18n();
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [helpOpen, setHelpOpen] = useState(false);

  const toggle = (key: MenuKey) =>
    setOpenMenu((prev) => (prev === key ? null : key));

  const go = (screen: Screen) => {
    setOpenMenu(null);
    onNavigate(screen);
  };

  const clientItems: SubItem[] = [
    { label: t('nav.add'),   screen: 'clientForm'  },
    { label: t('nav.query'), screen: 'clientQuery' },
    { label: t('nav.list'),  screen: 'clientList'  },
  ];

  const carItems: SubItem[] = [
    { label: t('nav.add'),   screen: 'carForm'  },
    { label: t('nav.query'), screen: 'carQuery' },
    { label: t('nav.list'),  screen: 'carList'  },
  ];

  const serviceItems: SubItem[] = [
    { label: t('nav.add'),   screen: 'serviceForm'  },
    { label: t('nav.query'), screen: 'serviceQuery' },
    { label: t('nav.list'),  screen: 'serviceList'  },
  ];

  return (
    <>
      {/* Overlay invisible para cerrar submenús al hacer clic fuera */}
      {openMenu && (
        <div
          style={styles.backdrop}
          onClick={() => setOpenMenu(null)}
        />
      )}

      <nav style={styles.bar} role="navigation" aria-label="Menú principal">
        {/* ── Clientes ── */}
        <div style={styles.item} onMouseEnter={() => setOpenMenu('clients')} onMouseLeave={() => setOpenMenu(null)}>
          <button style={styles.btn} onClick={() => toggle('clients')} aria-haspopup="true">
            🧑 {t('nav.clients')}
          </button>
          {openMenu === 'clients' && (
            <Dropdown items={clientItems} onSelect={go} />
          )}
        </div>

        {/* ── Carros ── */}
        <div style={styles.item} onMouseEnter={() => setOpenMenu('cars')} onMouseLeave={() => setOpenMenu(null)}>
          <button style={styles.btn} onClick={() => toggle('cars')} aria-haspopup="true">
            🚗 {t('nav.cars')}
          </button>
          {openMenu === 'cars' && (
            <Dropdown items={carItems} onSelect={go} />
          )}
        </div>

        {/* ── Servicios ── */}
        <div style={styles.item} onMouseEnter={() => setOpenMenu('services')} onMouseLeave={() => setOpenMenu(null)}>
          <button style={styles.btn} onClick={() => toggle('services')} aria-haspopup="true">
            🔧 {t('nav.services')}
          </button>
          {openMenu === 'services' && (
            <Dropdown items={serviceItems} onSelect={go} />
          )}
        </div>

        {/* ── Ayuda ── */}
        <div style={styles.item} onMouseEnter={() => setOpenMenu('help')} onMouseLeave={() => setOpenMenu(null)}>
          <button style={styles.btn} onClick={() => toggle('help')} aria-haspopup="true">
            ❓ {t('nav.help')}
          </button>
          {openMenu === 'help' && (
            <div style={styles.dropdown}>
              <button
                style={styles.dropItem}
                onClick={() => { setOpenMenu(null); setHelpOpen(true); }}
              >
                ❓ {t('nav.help')}
              </button>
            </div>
          )}
        </div>

        {/* ── Salir ── */}
        <div style={styles.item}>
          <button style={styles.btn} onClick={onExit}>
            🚪 {t('nav.exit')}
          </button>
        </div>
      </nav>

      {/* Modal de Ayuda */}
      {helpOpen && (
        <Modal
          title={t('help.title')}
          onClose={() => setHelpOpen(false)}
          variant="info"
        >
          <p style={{ whiteSpace: 'pre-line' }}>{t('help.body')}</p>
        </Modal>
      )}
    </>
  );
}

// ── Subcomponente Dropdown ────────────────────────────────────────────────────

function Dropdown({
  items,
  onSelect,
}: {
  items: SubItem[];
  onSelect: (s: Screen) => void;
}) {
  return (
    <div style={styles.dropdown} role="menu">
      {items.map((item) => (
        <button
          key={item.screen}
          style={styles.dropItem}
          role="menuitem"
          onClick={() => onSelect(item.screen)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

// ── Estilos ───────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  bar: {
    display: 'flex',
    alignItems: 'stretch',
    backgroundColor: 'var(--color-primary)',
    height: '48px',
    width: '100%',
    position: 'relative',
    zIndex: 100,
    boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
  },
  backdrop: {
    position: 'fixed',
    inset: 0,
    zIndex: 99,
  },
  item: {
    position: 'relative',
  },
  btn: {
    backgroundColor: 'transparent',
    color: 'var(--color-white)',
    border: 'none',
    height: '48px',
    padding: '0 18px',
    fontFamily: 'var(--font-main)',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    borderRadius: 0,
    whiteSpace: 'nowrap',
  },
  dropdown: {
    position: 'absolute',
    top: '48px',
    left: 0,
    backgroundColor: 'var(--color-primary)',
    minWidth: '160px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.30)',
    zIndex: 200,
    display: 'flex',
    flexDirection: 'column',
    borderTop: '2px solid rgba(255,255,255,0.25)',
  },
  dropItem: {
    backgroundColor: 'transparent',
    color: 'var(--color-white)',
    border: 'none',
    padding: '10px 18px',
    fontFamily: 'var(--font-main)',
    fontSize: '14px',
    textAlign: 'left',
    cursor: 'pointer',
    borderRadius: 0,
    borderBottom: '1px solid rgba(255,255,255,0.15)',
    width: '100%',
  },
};
