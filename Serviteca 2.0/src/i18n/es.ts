const es: Record<string, string> = {
  /* Cabecera */
  'app.title': 'Serviteca ADSO',

  /* Login */
  'login.title': 'Iniciar Sesión',
  'login.user': 'Usuario',
  'login.password': 'Contraseña',
  'login.btn': 'Ingresar',
  'login.forgot': '¿Olvidaste tu contraseña?',
  'login.error': 'Usuario o contraseña incorrectos',
  'login.forgot.title': 'Recuperar Contraseña',
  'login.forgot.field': 'Usuario o correo electrónico',
  'login.forgot.btn': 'Enviar',
  'login.forgot.ok': 'Si el usuario existe, recibirás instrucciones (simulación).',

  /* Menú superior */
  'nav.clients': 'Clientes',
  'nav.cars': 'Carros',
  'nav.services': 'Servicios',
  'nav.help': 'Ayuda',
  'nav.exit': 'Salir',
  'nav.add': 'Agregar',
  'nav.query': 'Consultar',
  'nav.list': 'Listar',

  /* Bienvenida */
  'main.welcome': 'Bienvenido a Serviteca ADSO',
  'main.subtitle': 'Selecciona una opción del menú para comenzar.',

  /* Formulario cliente */
  'client.title': 'Registrar Cliente',
  'client.id': 'Identificación',
  'client.names': 'Nombres',
  'client.lastnames': 'Apellidos',
  'client.email': 'Correo Electrónico',
  'client.phone': 'Celular',

  /* Formulario carro */
  'car.title': 'Registrar Carro',
  'car.plate': 'Placa',
  'car.brand': 'Marca',
  'car.model': 'Modelo',

  /* Formulario servicio */
  'service.title': 'Registrar Servicio',
  'service.plate': 'Placa del Carro',
  'service.clientId': 'Identificación del Cliente',
  'service.date': 'Fecha del Servicio',
  'service.type': 'Tipo de Servicio',
  'service.type.oil': 'Cambio de aceite',
  'service.type.sync': 'Sincronización',
  'service.type.align': 'Alineación',
  'service.type.wash': 'Lavado',

  /* Consulta servicios */
  'query.service.title': 'Consultar Servicios',
  'query.service.label': 'Placa del carro',
  'query.service.btn': 'Consultar',
  'query.service.empty': 'Este carro no tiene servicios registrados.',
  'query.service.col.plate': 'Placa',
  'query.service.col.type': 'Servicio Prestado',
  'query.service.col.date': 'Fecha',

  /* Consulta clientes */
  'query.client.title': 'Consultar Cliente',
  'query.client.label': 'Identificación',
  'query.client.btn': 'Buscar',
  'query.client.empty': 'No se encontró ningún cliente con esa identificación.',

  /* Consulta carros */
  'query.car.title': 'Consultar Carro',
  'query.car.label': 'Placa',
  'query.car.btn': 'Buscar',
  'query.car.empty': 'No se encontró ningún carro con esa placa.',

  /* Listas */
  'list.client.title': 'Listado de Clientes',
  'list.car.title': 'Listado de Carros',
  'list.service.title': 'Listado de Servicios',
  'list.empty': 'No hay registros disponibles.',

  /* Botones generales */
  'btn.save': 'Guardar',
  'btn.back': 'Volver',
  'btn.close': 'Cerrar',

  /* Modales de resultado */
  'modal.success': 'Operación Exitosa',
  'modal.error': 'Error',
  'modal.saved': 'El registro fue guardado correctamente.',
  'err.required': 'Todos los campos son obligatorios.',
  'err.email': 'El correo electrónico no tiene un formato válido.',
  'err.phone': 'El celular debe contener solo números.',
  'err.dupId': 'Ya existe un cliente con esa identificación.',
  'err.dupPlate': 'Ya existe un carro con esa placa.',
  'err.noPlate': 'La placa ingresada no existe en el sistema.',
  'err.noClient': 'La identificación del cliente no existe en el sistema.',

  /* Menú inferior */
  'bottom.lang': 'Idiomas',
  'bottom.braille': 'Braille',
  'bottom.voice': 'Voz',
  'bottom.stop': 'Detener',

  /* Ayuda */
  'help.title': 'Ayuda – Serviteca ADSO',
  'help.body': `1. Inicie sesión con usuario "admin" y contraseña "1234".
2. Use el menú superior para navegar entre módulos.
3. Clientes → Agregar: registra un nuevo cliente.
4. Carros → Agregar: registra un nuevo vehículo.
5. Servicios → Agregar: registra un servicio (la placa y el cliente deben existir).
6. Servicios → Consultar: busca los servicios de un carro por placa.
7. Cualquier módulo → Listar: muestra todos los registros guardados.
8. Barra inferior: cambia idioma, activa vista Braille o escucha la página en voz alta.`,

  /* Braille */
  'braille.title': 'Vista Braille',
  'braille.close': 'Cerrar Braille',

  /* Salir */
  'exit.confirm': '¿Deseas cerrar la aplicación?',
};

export default es;
