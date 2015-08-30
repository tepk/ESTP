Router.configure({
  layoutTemplate: 'menu',
  loadingTemplate: 'loading'
});

Router.route('/', function () {
    this.render('main');
});

Router.route('/price', function () {
    this.render('price');
});

Router.route('/service', function () {
    this.render('service');
});

Router.route('/abuse', function () {
    this.render('abuse');
});

Router.route('/contacts', function () {
    this.render('contacts');
});