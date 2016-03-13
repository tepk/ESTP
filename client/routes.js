Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home'});
Router.route('/about', {name: 'about'});
Router.route('/organization', {name: 'organization'});
Router.route('/price', {name: 'price'});
Router.route('/service', {name: 'service'});
Router.route('/abuse', {name: 'abuse'});
Router.route('/contacts', {name: 'contacts'});
Router.route('/admin', {name: 'admin'});
Router.route('/login', {name: 'login'});


