// ============================================================
// Serviteca ADSO – Síntesis de voz (Web Speech API)
// ============================================================

/**
 * Lee en voz alta el texto proporcionado.
 * @param text    Texto a leer.
 * @param bcp47   Código de idioma BCP-47 (ej. 'es-CO', 'en-US').
 * @param onEnd   Callback opcional cuando termina la lectura.
 */
export function speak(text: string, bcp47: string, onEnd?: () => void): void {
  if (!window.speechSynthesis) return;
  // Cancelar cualquier lectura en curso antes de comenzar
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang  = bcp47;
  utterance.rate  = 0.95;
  utterance.pitch = 1;
  if (onEnd) utterance.onend = onEnd;
  window.speechSynthesis.speak(utterance);
}

/**
 * Detiene la lectura en curso.
 */
export function stopSpeech(): void {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}
