import { createContext, useContext, useState, useCallback } from 'react';
import type React from 'react';
import type { Lang } from '../types';
import { dictionaries } from '../i18n';

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'es',
  setLang: () => undefined,
  t: (k) => k,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es');

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const t = useCallback(
    (key: string): string => dictionaries[lang][key] ?? key,
    [lang],
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  return useContext(I18nContext);
}
