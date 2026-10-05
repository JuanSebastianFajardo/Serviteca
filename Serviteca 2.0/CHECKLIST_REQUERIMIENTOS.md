# Checklist de Requerimientos – Serviteca ADSO
**Versión:** 1.0 · **Fecha:** 2026-10-04  
**Columnas:** SI = implementado · NO = no implementado · ADI = implementado con adición/mejora

---

## Requisitos Funcionales

| ID | Descripción | SI | NO | ADI | Observaciones |
|----|-------------|:--:|:--:|:---:|---------------|
| RF-01.1 | Al ingresar usuario "admin" y contraseña "1234" y hacer clic en "Ingresar", el sistema navega a la pantalla principal. | ✅ | | | `LoginView.tsx` – constantes `VALID_USER`/`VALID_PASS` |
| RF-01.2 | Con credenciales incorrectas, se muestra "Usuario o contraseña incorrectos". | ✅ | | | Mensaje inline bajo el formulario, role="alert" |
| RF-01.3 | El campo contraseña oculta los caracteres (`type="password"`). | ✅ | | | |
| RF-01.4 | El enlace "¿Olvidaste tu contraseña?" abre un modal simulado con campo y botón "Enviar". | ✅ | | | Modal muestra mensaje de confirmación simulado |
| RF-01.5 | El formulario de login se renderiza en un recuadro centrado de 400 × 400 px. | ✅ | | | `LoginView.tsx` – `styles.card` |
| RF-02.1 | La pantalla principal muestra una barra de menú horizontal verde con: Clientes, Carros, Servicios, Ayuda, Salir. | ✅ | | | `MenuBar.tsx` |
| RF-02.2 | Cada ítem del menú muestra un ícono y etiqueta. | ✅ | | | Íconos emoji Unicode (🧑 🚗 🔧 ❓ 🚪) — decisión D-05 |
| RF-02.3 | Al pasar el mouse o hacer clic en Clientes, Carros o Servicios, se despliega submenú con: Agregar, Consultar, Listar. | ✅ | | | `onMouseEnter`/`onMouseLeave` + click toggle |
| RF-02.4 | Clientes → Agregar navega a INT-03. | ✅ | | | |
| RF-02.5 | Carros → Agregar navega a INT-04. | ✅ | | | |
| RF-02.6 | Servicios → Agregar navega a INT-05. | ✅ | | | |
| RF-02.7 | Servicios → Consultar navega a INT-06. | ✅ | | | |
| RF-02.8 | Clientes → Consultar muestra búsqueda por identificación con tarjeta de resultado. | ✅ | | | `ClientQuery.tsx` |
| RF-02.9 | Carros → Consultar muestra búsqueda por placa con tarjeta de resultado. | ✅ | | | `CarQuery.tsx` |
| RF-02.10 | Listar en cualquier módulo muestra tabla completa con encabezado caoba y texto blanco. | ✅ | | | `DataTable.tsx` – `thead` caoba |
| RF-02.11 | Ayuda → Ayuda abre modal con instrucciones de uso. | ✅ | | | `MenuBar.tsx` – estado `helpOpen` |
| RF-02.12 | Salir intenta `window.close()` y, si falla, vuelve al login y limpia la sesión. | ✅ | | | `MainView.tsx` – `handleExit()` |
| RF-03.1 | El formulario de cliente incluye: identificación, nombres, apellidos, correo, celular. | ✅ | | | `ClientForm.tsx` |
| RF-03.2 | El formulario se renderiza en ~600 × 500 px con estilo verde y caoba. | ✅ | | | `FormCard.tsx` |
| RF-03.3 | Al guardar con datos válidos, persiste en localStorage y muestra modal de éxito. | ✅ | | | |
| RF-03.4 | Campo obligatorio vacío → modal de error indicando campos faltantes. | ✅ | | | |
| RF-03.5 | Correo con formato inválido → modal de error. | ✅ | | | Regex `[^\s@]+@[^\s@]+\.[^\s@]+` |
| RF-03.6 | Celular con caracteres no numéricos → modal de error. | ✅ | | | Regex `^\d+$` |
| RF-03.7 | Identificación duplicada → modal de error indicando duplicado. | ✅ | | | |
| RF-03.8 | Botón "Volver" navega a la pantalla principal sin guardar. | ✅ | | | |
| RF-04.1 | El formulario de carro incluye: placa, marca, modelo. | ✅ | | | `CarForm.tsx` |
| RF-04.2 | El formulario se renderiza en ~600 × 500 px con estilo verde y caoba. | ✅ | | | |
| RF-04.3 | Al guardar con datos válidos, persiste en localStorage y muestra modal de éxito. | ✅ | | | Placa guardada en mayúsculas |
| RF-04.4 | Placa vacía → modal de error. | ✅ | | | |
| RF-04.5 | Placa duplicada → modal de error. | ✅ | | | Comparación case-insensitive |
| RF-04.6 | Botón "Volver" navega a la pantalla principal sin guardar. | ✅ | | | |
| RF-05.1 | El formulario de servicio incluye: placa, identificación, fecha (date picker), tipo (select). | ✅ | | | `ServiceForm.tsx` |
| RF-05.2 | El formulario se renderiza en ~600 × 500 px. | ✅ | | | |
| RF-05.3 | Al guardar con datos válidos y existentes, persiste y muestra modal de éxito. | ✅ | | | |
| RF-05.4 | Si la placa no existe → modal de error claro. | ✅ | | | |
| RF-05.5 | Si la identificación no existe → modal de error claro. | ✅ | | | |
| RF-05.6 | Botón "Volver" navega a la pantalla principal. | ✅ | | | |
| RF-06.1 | La pantalla de consulta incluye campo de placa y botón "Consultar". | ✅ | | | `ServiceQueryView.tsx` |
| RF-06.2 | Con placa válida muestra tabla: placa, servicio prestado, fecha. | ✅ | | | `DataTable` con 3 columnas |
| RF-06.3 | Sin servicios para la placa muestra "Este carro no tiene servicios registrados". | ✅ | | | |
| RF-06.4 | Botón "Volver" navega a la pantalla principal. | ✅ | | | |
| RF-07.1 | Barra inferior visible en TODAS las pantallas incluyendo login. | ✅ | | | `BottomMenu` incluido en `LoginView` y `MainView` |
| RF-07.2 | La barra contiene tres opciones con ícono y etiqueta: Idiomas, Braille, Voz. | ✅ | | | |
| RF-07.3 | Al hacer clic en Idiomas se muestra lista: Español, English, Português, Français. | ✅ | | | Dropup desde abajo |
| RF-07.4 | Al seleccionar idioma se traducen todos los textos visibles con diccionario local. | ✅ | | | `I18nContext` + `useI18n()` en cada componente |
| RF-07.5 | Al hacer clic en Braille, panel/modal muestra textos convertidos a Braille Unicode. | ✅ | | | Modal con `toBraille()` sobre textos del DOM |
| RF-07.6 | El conversor Braille cubre letras a-z/A-Z, dígitos 0-9 y puntuación básica. | ✅ | | | `braille.ts` – indicadores de mayúscula y número |
| RF-07.7 | Al hacer clic en Voz, se leen en voz alta los textos visibles con Web Speech API. | ✅ | | | `speech.ts` – `speak()` con código BCP-47 del idioma activo |
| RF-07.8 | El botón de detener cancela la síntesis de voz. | ✅ | | | `stopSpeech()` + botón ⏹ dinámico |

---

## Requisitos No Funcionales

| ID | Descripción | SI | NO | ADI | Observaciones |
|----|-------------|:--:|:--:|:---:|---------------|
| RNF-01.1 | Lienzo de referencia 1366 × 768 px; medidas en px. | ✅ | | | Tarjetas y barras en px; sin unidades relativas en estructuras principales |
| RNF-01.2 | Fondo `#F0F0F0` en todas las pantallas. | ✅ | | | Variable `--color-bg` aplicada en `body` |
| RNF-01.3 | Logo y título "Serviteca ADSO" centrados arriba en todas las pantallas. | ✅ | | | Componente `Logo.tsx` incluido en `LoginView` y `MainView` |
| RNF-01.4 | Menús/botones `#2E7D32`; detalles de formulario `#8B3A1E`; texto sobre color `#FFFFFF`; texto principal `#212121`. | ✅ | | | Variables CSS en `theme.css` |
| RNF-01.5 | Toda la tipografía en Times New Roman con fallback serif. | ✅ | | | `--font-main: 'Times New Roman', Times, serif` aplicado globalmente |
| RNF-01.6 | Colores y fuente definidos como variables CSS en un único archivo `theme.css`. | ✅ | | | `src/styles/theme.css` |
| RNF-01.7 | Datos persisten al recargar (localStorage, sin backend). | ✅ | | | `storage.ts`; sesión recuperada en `App.tsx` con `getSession()` |
| RNF-01.8 | Sin errores de TypeScript ni advertencias en consola. | ✅ | | | Tipado estricto en `tsconfig.json`; `noUnusedLocals`, `noUnusedParameters` activos |

---

## Resumen

| Estado | Cantidad |
|--------|---------|
| ✅ SI (implementado) | 53 |
| ❌ NO | 0 |
| ➕ ADI | 0 |

**Cobertura total: 53 / 53 (100 %)**
