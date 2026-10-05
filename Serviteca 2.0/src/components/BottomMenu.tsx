// ============================================================
// Serviteca ADSO – Barra inferior de accesibilidad (RF-07)
// Fija en la parte inferior de TODAS las pantallas
// Opciones: Idiomas | Braille | Voz
// ============================================================
import { useState, useRef, useEffect } from 'react';
import type React from 'react';
import { useI18n } from '../context/I18nContext';
import Modal from './Modal';
import { toBraille } from '../utils/braille';
import { speak, stopSpeech } from '../utils/speech';
import { langLabels, bcp47 } from '../i18n';
import type { Lang } from '../types';

export default function BottomMenu() {
  const { t, lang, setLang } = useI18n();
  const [langOpen,    setLangOpen]    = useState(false);
  const [brailleOpen, setBrailleOpen] = useState(false);
  const [brailleText, setBrailleText] = useState('');
  const [speaking,    setSpeaking]    = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown de idiomas al hacer clic fuera
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ── Recopilar textos visibles de la pantalla ──────────────────────────────
  const getVisibleText = (): string => {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const el = node.parentElement;
          if (!el) return NodeFilter.FILTER_REJECT;
          // Excluir la barra inferior para evitar eco
          if (el.closest('[data-bottom-menu]')) return NodeFilter.FILTER_REJECT;
          const style = getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden') {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      },
    );
    const texts: string[] = [];
    let node: Node | null;
    while ((node = walker.nextNode())) {
      const text = node.textContent?.trim();
      if (text) texts.push(text);
    }
    return texts.join(' ');
  };

  // ── Braille ───────────────────────────────────────────────────────────────
  const handleBraille = () => {
    const text = getVisibleText();
    setBrailleText(toBraille(text));
    setBrailleOpen(true);
  };

  // ── Voz ───────────────────────────────────────────────────────────────────
  const handleVoice = () => {
    if (speaking) {
      stopSpeech();
      setSpeaking(false);
    } else {
      const text = getVisibleText();
      speak(text, bcp47[lang], () => setSpeaking(false));
      setSpeaking(true);
    }
  };

  const handleStopVoice = () => {
    stopSpeech();
    setSpeaking(false);
  };

  return (
    <>
      <div data-bottom-menu="" style={styles.bar} role="contentinfo" aria-label="Barra de accesibilidad">

        {/* ── Idiomas ── */}
        <div ref={langRef} style={styles.item}>
          <button
            style={styles.btn}
            onClick={() => setLangOpen((p) => !p)}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
          >
            🌐 {t('bottom.lang')}
          </button>
          {langOpen && (
            <div style={styles.langDropup} role="listbox">
              {(Object.keys(langLabels) as Lang[]).map((l) => (
                <button
                  key={l}
                  style={{
                    ...styles.langItem,
                    fontWeight: l === lang ? 'bold' : 'normal',
                    backgroundColor: l === lang ? 'rgba(255,255,255,0.20)' : 'transparent',
                  }}
                  role="option"
                  aria-selected={l === lang}
                  onClick={() => { setLang(l); setLangOpen(false); }}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Braille ── */}
        <div style={styles.item}>
          <button style={styles.btn} onClick={handleBraille}>
            ⠃ {t('bottom.braille')}
          </button>
        </div>

        {/* ── Voz ── */}
        <div style={styles.item}>
          <button style={styles.btn} onClick={handleVoice}>
            🔊 {speaking ? t('bottom.stop') : t('bottom.voice')}
          </button>
          {speaking && (
            <button style={styles.stopBtn} onClick={handleStopVoice} title={t('bottom.stop')}>
              ⏹
            </button>
          )}
        </div>
      </div>

      {/* Modal Braille */}
      {brailleOpen && (
        <Modal
          title={t('braille.title')}
          onClose={() => setBrailleOpen(false)}
          variant="info"
        >
          <p style={styles.brailleText}>{brailleText}</p>
        </Modal>
      )}
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  bar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '48px',
    backgroundColor: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'stretch',
    zIndex: 500,
    boxShadow: '0 -2px 6px rgba(0,0,0,0.25)',
  },
  item: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  stopBtn: {
    backgroundColor: 'rgba(255,255,255,0.20)',
    color: 'var(--color-white)',
    border: 'none',
    padding: '4px 10px',
    fontFamily: 'var(--font-main)',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginLeft: '-8px',
  },
  langDropup: {
    position: 'absolute',
    bottom: '48px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'var(--color-primary)',
    minWidth: '150px',
    boxShadow: '0 -4px 12px rgba(0,0,0,0.30)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 600,
    borderBottom: '2px solid rgba(255,255,255,0.25)',
  },
  langItem: {
    color: 'var(--color-white)',
    border: 'none',
    padding: '10px 16px',
    fontFamily: 'var(--font-main)',
    fontSize: '14px',
    textAlign: 'left',
    cursor: 'pointer',
    borderTop: '1px solid rgba(255,255,255,0.15)',
    width: '100%',
  },
  brailleText: {
    fontFamily: 'monospace',
    fontSize: '22px',
    lineHeight: '2',
    letterSpacing: '3px',
    wordBreak: 'break-all',
    color: 'var(--color-text)',
  },
};
