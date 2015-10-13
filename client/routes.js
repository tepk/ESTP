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
Router.route('/admin/:id?', {name: 'admin', data: function(){return {id: this.params.id}}});
Router.route('/login', {name: 'login'});


