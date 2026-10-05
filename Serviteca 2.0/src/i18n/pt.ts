const pt: Record<string, string> = {
  'app.title': 'Serviteca ADSO',

  'login.title': 'Entrar',
  'login.user': 'Usuário',
  'login.password': 'Senha',
  'login.btn': 'Entrar',
  'login.forgot': 'Esqueceu sua senha?',
  'login.error': 'Usuário ou senha incorretos',
  'login.forgot.title': 'Recuperar Senha',
  'login.forgot.field': 'Usuário ou endereço de e-mail',
  'login.forgot.btn': 'Enviar',
  'login.forgot.ok': 'Se o usuário existir, você receberá instruções (simulação).',

  'nav.clients': 'Clientes',
  'nav.cars': 'Carros',
  'nav.services': 'Serviços',
  'nav.help': 'Ajuda',
  'nav.exit': 'Sair',
  'nav.add': 'Adicionar',
  'nav.query': 'Consultar',
  'nav.list': 'Listar',

  'main.welcome': 'Bem-vindo à Serviteca ADSO',
  'main.subtitle': 'Selecione uma opção do menu para começar.',

  'client.title': 'Registrar Cliente',
  'client.id': 'Identificação',
  'client.names': 'Nomes',
  'client.lastnames': 'Sobrenomes',
  'client.email': 'E-mail',
  'client.phone': 'Celular',

  'car.title': 'Registrar Carro',
  'car.plate': 'Placa',
  'car.brand': 'Marca',
  'car.model': 'Modelo',

  'service.title': 'Registrar Serviço',
  'service.plate': 'Placa do Carro',
  'service.clientId': 'Identificação do Cliente',
  'service.date': 'Data do Serviço',
  'service.type': 'Tipo de Serviço',
  'service.type.oil': 'Troca de óleo',
  'service.type.sync': 'Sincronização',
  'service.type.align': 'Alinhamento',
  'service.type.wash': 'Lavagem',

  'query.service.title': 'Consultar Serviços',
  'query.service.label': 'Placa do carro',
  'query.service.btn': 'Consultar',
  'query.service.empty': 'Este carro não tem serviços registrados.',
  'query.service.col.plate': 'Placa',
  'query.service.col.type': 'Serviço',
  'query.service.col.date': 'Data',

  'query.client.title': 'Consultar Cliente',
  'query.client.label': 'Identificação',
  'query.client.btn': 'Buscar',
  'query.client.empty': 'Nenhum cliente encontrado com essa identificação.',

  'query.car.title': 'Consultar Carro',
  'query.car.label': 'Placa',
  'query.car.btn': 'Buscar',
  'query.car.empty': 'Nenhum carro encontrado com essa placa.',

  'list.client.title': 'Lista de Clientes',
  'list.car.title': 'Lista de Carros',
  'list.service.title': 'Lista de Serviços',
  'list.empty': 'Nenhum registro disponível.',

  'btn.save': 'Salvar',
  'btn.back': 'Voltar',
  'btn.close': 'Fechar',

  'modal.success': 'Sucesso',
  'modal.error': 'Erro',
  'modal.saved': 'O registro foi salvo com sucesso.',
  'err.required': 'Todos os campos são obrigatórios.',
  'err.email': 'O formato do endereço de e-mail é inválido.',
  'err.phone': 'O celular deve conter apenas números.',
  'err.dupId': 'Já existe um cliente com essa identificação.',
  'err.dupPlate': 'Já existe um carro com essa placa.',
  'err.noPlate': 'A placa inserida não existe no sistema.',
  'err.noClient': 'A identificação do cliente não existe no sistema.',

  'bottom.lang': 'Idiomas',
  'bottom.braille': 'Braille',
  'bottom.voice': 'Voz',
  'bottom.stop': 'Parar',

  'help.title': 'Ajuda – Serviteca ADSO',
  'help.body': `1. Faça login com usuário "admin" e senha "1234".
2. Use o menu superior para navegar entre os módulos.
3. Clientes → Adicionar: registre um novo cliente.
4. Carros → Adicionar: registre um novo veículo.
5. Serviços → Adicionar: registre um serviço (placa e cliente devem existir).
6. Serviços → Consultar: busque os serviços de um carro pela placa.
7. Qualquer módulo → Listar: veja todos os registros salvos.
8. Barra inferior: mude idioma, ative a visão Braille ou ouça a página em voz alta.`,

  'braille.title': 'Visão Braille',
  'braille.close': 'Fechar Braille',

  'exit.confirm': 'Deseja fechar o aplicativo?',
};

export default pt;
