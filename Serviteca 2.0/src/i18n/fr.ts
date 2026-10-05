const fr: Record<string, string> = {
  'app.title': 'Serviteca ADSO',

  'login.title': 'Connexion',
  'login.user': 'Utilisateur',
  'login.password': 'Mot de passe',
  'login.btn': 'Se connecter',
  'login.forgot': 'Mot de passe oublié ?',
  'login.error': 'Nom d\'utilisateur ou mot de passe incorrect',
  'login.forgot.title': 'Récupérer le mot de passe',
  'login.forgot.field': 'Utilisateur ou adresse e-mail',
  'login.forgot.btn': 'Envoyer',
  'login.forgot.ok': 'Si l\'utilisateur existe, vous recevrez des instructions (simulation).',

  'nav.clients': 'Clients',
  'nav.cars': 'Voitures',
  'nav.services': 'Services',
  'nav.help': 'Aide',
  'nav.exit': 'Quitter',
  'nav.add': 'Ajouter',
  'nav.query': 'Rechercher',
  'nav.list': 'Lister',

  'main.welcome': 'Bienvenue dans Serviteca ADSO',
  'main.subtitle': 'Sélectionnez une option du menu pour commencer.',

  'client.title': 'Enregistrer un client',
  'client.id': 'Identification',
  'client.names': 'Prénoms',
  'client.lastnames': 'Noms de famille',
  'client.email': 'Adresse e-mail',
  'client.phone': 'Téléphone portable',

  'car.title': 'Enregistrer une voiture',
  'car.plate': 'Plaque',
  'car.brand': 'Marque',
  'car.model': 'Modèle',

  'service.title': 'Enregistrer un service',
  'service.plate': 'Plaque de la voiture',
  'service.clientId': 'Identifiant du client',
  'service.date': 'Date du service',
  'service.type': 'Type de service',
  'service.type.oil': 'Vidange d\'huile',
  'service.type.sync': 'Mise au point',
  'service.type.align': 'Alignement des roues',
  'service.type.wash': 'Lavage',

  'query.service.title': 'Consulter les services',
  'query.service.label': 'Plaque de la voiture',
  'query.service.btn': 'Rechercher',
  'query.service.empty': 'Cette voiture n\'a aucun service enregistré.',
  'query.service.col.plate': 'Plaque',
  'query.service.col.type': 'Service',
  'query.service.col.date': 'Date',

  'query.client.title': 'Rechercher un client',
  'query.client.label': 'Identification',
  'query.client.btn': 'Rechercher',
  'query.client.empty': 'Aucun client trouvé avec cet identifiant.',

  'query.car.title': 'Rechercher une voiture',
  'query.car.label': 'Plaque',
  'query.car.btn': 'Rechercher',
  'query.car.empty': 'Aucune voiture trouvée avec cette plaque.',

  'list.client.title': 'Liste des clients',
  'list.car.title': 'Liste des voitures',
  'list.service.title': 'Liste des services',
  'list.empty': 'Aucun enregistrement disponible.',

  'btn.save': 'Enregistrer',
  'btn.back': 'Retour',
  'btn.close': 'Fermer',

  'modal.success': 'Succès',
  'modal.error': 'Erreur',
  'modal.saved': 'L\'enregistrement a été sauvegardé avec succès.',
  'err.required': 'Tous les champs sont obligatoires.',
  'err.email': 'Le format de l\'adresse e-mail est invalide.',
  'err.phone': 'Le téléphone ne doit contenir que des chiffres.',
  'err.dupId': 'Un client avec cet identifiant existe déjà.',
  'err.dupPlate': 'Une voiture avec cette plaque existe déjà.',
  'err.noPlate': 'La plaque saisie n\'existe pas dans le système.',
  'err.noClient': 'L\'identifiant du client n\'existe pas dans le système.',

  'bottom.lang': 'Langues',
  'bottom.braille': 'Braille',
  'bottom.voice': 'Voix',
  'bottom.stop': 'Arrêter',

  'help.title': 'Aide – Serviteca ADSO',
  'help.body': `1. Connectez-vous avec l'utilisateur "admin" et le mot de passe "1234".
2. Utilisez le menu supérieur pour naviguer entre les modules.
3. Clients → Ajouter : enregistrez un nouveau client.
4. Voitures → Ajouter : enregistrez un nouveau véhicule.
5. Services → Ajouter : enregistrez un service (la plaque et le client doivent exister).
6. Services → Rechercher : consultez les services d'une voiture par plaque.
7. N'importe quel module → Lister : affichez tous les enregistrements.
8. Barre inférieure : changez de langue, activez la vue Braille ou écoutez la page à voix haute.`,

  'braille.title': 'Vue Braille',
  'braille.close': 'Fermer Braille',

  'exit.confirm': 'Voulez-vous fermer l\'application ?',
};

export default fr;
