// ============================================================
// Serviteca ADSO – Conversor Braille Grade 1 (Unicode)
// Cubre: letras a-z, dígitos 0-9, espacios y puntuación básica.
// Indicador de mayúscula: ⠠ (U+2820) antes de la letra.
// Indicador numérico:     ⠼ (U+283C) antes de una secuencia de dígitos.
// ============================================================

// Mapa letra minúscula → braille (U+2800 base)
const LETTER_MAP: Record<string, string> = {
  a: '⠁', b: '⠃', c: '⠉', d: '⠙', e: '⠑',
  f: '⠋', g: '⠛', h: '⠓', i: '⠊', j: '⠚',
  k: '⠅', l: '⠇', m: '⠍', n: '⠝', o: '⠕',
  p: '⠏', q: '⠟', r: '⠗', s: '⠎', t: '⠞',
  u: '⠥', v: '⠧', w: '⠺', x: '⠭', y: '⠽',
  z: '⠵',
};

// Dígitos (se usan las mismas celdas que a-j con indicador numérico previo)
const DIGIT_MAP: Record<string, string> = {
  '1': '⠁', '2': '⠃', '3': '⠉', '4': '⠙', '5': '⠑',
  '6': '⠋', '7': '⠛', '8': '⠓', '9': '⠊', '0': '⠚',
};

// Puntuación básica
const PUNCT_MAP: Record<string, string> = {
  '.':  '⠲',
  ',':  '⠂',
  ';':  '⠆',
  ':':  '⠒',
  '!':  '⠖',
  '?':  '⠦',
  '-':  '⠤',
  '(':  '⠦',
  ')':  '⠴',
  '"':  '⠶',
  '\'': '⠄',
  '/':  '⠌',
  ' ':  '⠀',   // U+2800 braille blank
  '\n': '\n',
};

const CAPITAL_INDICATOR = '⠠';
const NUMBER_INDICATOR  = '⠼';

/**
 * Convierte una cadena de texto a caracteres Braille Unicode Grade 1.
 * Los caracteres sin mapeo se conservan tal cual.
 */
export function toBraille(text: string): string {
  let result = '';
  let i = 0;
  let inNumber = false;

  while (i < text.length) {
    const ch = text[i];
    const lower = ch.toLowerCase();

    if (/\d/.test(ch)) {
      if (!inNumber) {
        result += NUMBER_INDICATOR;
        inNumber = true;
      }
      result += DIGIT_MAP[ch] ?? ch;
    } else if (lower in LETTER_MAP) {
      inNumber = false;
      if (ch !== lower) {
        // Es mayúscula
        result += CAPITAL_INDICATOR;
      }
      result += LETTER_MAP[lower];
    } else if (ch in PUNCT_MAP) {
      inNumber = false;
      result += PUNCT_MAP[ch];
    } else {
      inNumber = false;
      result += ch; // conserva el carácter sin mapeo
    }
    i++;
  }

  return result;
}
