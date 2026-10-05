import es from './es';
import en from './en';
import pt from './pt';
import fr from './fr';
import type { Lang } from '../types';

export const dictionaries: Record<Lang, Record<string, string>> = { es, en, pt, fr };

export const langLabels: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
  fr: 'Français',
};

export const bcp47: Record<Lang, string> = {
  es: 'es-CO',
  en: 'en-US',
  pt: 'pt-BR',
  fr: 'fr-FR',
};
