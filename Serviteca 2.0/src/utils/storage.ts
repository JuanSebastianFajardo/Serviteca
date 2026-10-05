// ============================================================
// Serviteca ADSO – Capa de persistencia (localStorage)
// ============================================================
import type { Cliente, Carro, Servicio } from '../types';

const KEYS = {
  clientes:  'sva_clientes',
  carros:    'sva_carros',
  servicios: 'sva_servicios',
  session:   'sva_session',
} as const;

// ── Helpers ─────────────────────────────────────────────────

function load<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function save<T>(key: string, data: T[]): void {
  localStorage.setItem(key, JSON.stringify(data));
}

// ── Clientes ─────────────────────────────────────────────────

export function getClientes(): Cliente[] {
  return load<Cliente>(KEYS.clientes);
}

export function saveCliente(c: Cliente): void {
  const list = getClientes();
  list.push(c);
  save(KEYS.clientes, list);
}

export function findClienteById(id: string): Cliente | undefined {
  return getClientes().find((c) => c.identificacion === id);
}

// ── Carros ───────────────────────────────────────────────────

export function getCarros(): Carro[] {
  return load<Carro>(KEYS.carros);
}

export function saveCarro(c: Carro): void {
  const list = getCarros();
  list.push(c);
  save(KEYS.carros, list);
}

export function findCarroByPlaca(placa: string): Carro | undefined {
  return getCarros().find((c) => c.placa.toUpperCase() === placa.toUpperCase());
}

// ── Servicios ────────────────────────────────────────────────

export function getServicios(): Servicio[] {
  return load<Servicio>(KEYS.servicios);
}

export function saveServicio(s: Servicio): void {
  const list = getServicios();
  list.push(s);
  save(KEYS.servicios, list);
}

export function getServiciosByPlaca(placa: string): Servicio[] {
  return getServicios().filter(
    (s) => s.placa.toUpperCase() === placa.toUpperCase(),
  );
}

// ── Sesión ───────────────────────────────────────────────────

export function setSession(user: string): void {
  localStorage.setItem(KEYS.session, user);
}

export function getSession(): string | null {
  return localStorage.getItem(KEYS.session);
}

export function clearSession(): void {
  localStorage.removeItem(KEYS.session);
}
