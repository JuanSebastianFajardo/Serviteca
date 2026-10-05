const en: Record<string, string> = {
  'app.title': 'Serviteca ADSO',

  'login.title': 'Sign In',
  'login.user': 'Username',
  'login.password': 'Password',
  'login.btn': 'Log In',
  'login.forgot': 'Forgot your password?',
  'login.error': 'Incorrect username or password',
  'login.forgot.title': 'Recover Password',
  'login.forgot.field': 'Username or email address',
  'login.forgot.btn': 'Send',
  'login.forgot.ok': 'If the user exists, you will receive instructions (simulation).',

  'nav.clients': 'Clients',
  'nav.cars': 'Cars',
  'nav.services': 'Services',
  'nav.help': 'Help',
  'nav.exit': 'Exit',
  'nav.add': 'Add',
  'nav.query': 'Search',
  'nav.list': 'List',

  'main.welcome': 'Welcome to Serviteca ADSO',
  'main.subtitle': 'Select an option from the menu to get started.',

  'client.title': 'Register Client',
  'client.id': 'ID Number',
  'client.names': 'First Name(s)',
  'client.lastnames': 'Last Name(s)',
  'client.email': 'Email Address',
  'client.phone': 'Mobile Phone',

  'car.title': 'Register Car',
  'car.plate': 'Plate',
  'car.brand': 'Brand',
  'car.model': 'Model',

  'service.title': 'Register Service',
  'service.plate': 'Car Plate',
  'service.clientId': 'Client ID',
  'service.date': 'Service Date',
  'service.type': 'Service Type',
  'service.type.oil': 'Oil Change',
  'service.type.sync': 'Tune-Up',
  'service.type.align': 'Wheel Alignment',
  'service.type.wash': 'Car Wash',

  'query.service.title': 'Service Query',
  'query.service.label': 'Car plate',
  'query.service.btn': 'Search',
  'query.service.empty': 'This car has no registered services.',
  'query.service.col.plate': 'Plate',
  'query.service.col.type': 'Service',
  'query.service.col.date': 'Date',

  'query.client.title': 'Client Search',
  'query.client.label': 'ID Number',
  'query.client.btn': 'Search',
  'query.client.empty': 'No client found with that ID.',

  'query.car.title': 'Car Search',
  'query.car.label': 'Plate',
  'query.car.btn': 'Search',
  'query.car.empty': 'No car found with that plate.',

  'list.client.title': 'Client List',
  'list.car.title': 'Car List',
  'list.service.title': 'Service List',
  'list.empty': 'No records available.',

  'btn.save': 'Save',
  'btn.back': 'Back',
  'btn.close': 'Close',

  'modal.success': 'Success',
  'modal.error': 'Error',
  'modal.saved': 'The record was saved successfully.',
  'err.required': 'All fields are required.',
  'err.email': 'The email address format is invalid.',
  'err.phone': 'Mobile phone must contain numbers only.',
  'err.dupId': 'A client with that ID already exists.',
  'err.dupPlate': 'A car with that plate already exists.',
  'err.noPlate': 'The entered plate does not exist in the system.',
  'err.noClient': 'The client ID does not exist in the system.',

  'bottom.lang': 'Languages',
  'bottom.braille': 'Braille',
  'bottom.voice': 'Voice',
  'bottom.stop': 'Stop',

  'help.title': 'Help – Serviteca ADSO',
  'help.body': `1. Log in with username "admin" and password "1234".
2. Use the top menu to navigate between modules.
3. Clients → Add: register a new client.
4. Cars → Add: register a new vehicle.
5. Services → Add: register a service (plate and client must exist).
6. Services → Search: look up services for a car by plate.
7. Any module → List: view all saved records.
8. Bottom bar: change language, enable Braille view, or listen to the page aloud.`,

  'braille.title': 'Braille View',
  'braille.close': 'Close Braille',

  'exit.confirm': 'Do you want to close the application?',
};

export default en;
