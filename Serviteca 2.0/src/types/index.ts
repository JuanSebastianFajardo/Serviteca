// ============================================================
// Serviteca ADSO – Tipos de dominio
// ============================================================

export interface Cliente {
  identificacion: string;
  nombres: string;
  apellidos: string;
  correo: string;
  celular: string;
}

export interface Carro {
  placa: string;
  marca: string;
  modelo: string;
}

export type TipoServicio =
  | 'Cambio de aceite'
  | 'Sincronización'
  | 'Alineación'
  | 'Lavado';

export interface Servicio {
  id: string;
  placa: string;
  identificacion: string;
  fecha: string;      // YYYY-MM-DD
  tipo: TipoServicio;
}

// Pantallas disponibles para la navegación por estado
export type Screen =
  | 'login'
  | 'main'
  | 'clientForm'
  | 'clientQuery'
  | 'clientList'
  | 'carForm'
  | 'carQuery'
  | 'carList'
  | 'serviceForm'
  | 'serviceQuery'
  | 'serviceList';

export type Lang = 'es' | 'en' | 'pt' | 'fr';
