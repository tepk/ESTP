Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home'});
Router.route('/about', {name: 'about'});
Router.route('/organization', {name: 'organization'});
Router.route('/price', {name: 'price'});
Router.route('/service', {name: 'service'});
/* Router.route('/home/:service', function () {
  var params = this.params;
  console.log(this.params)
  var url = params.url;
  this.render('service', {
    data: function () {
      return {url: this.params.url};
    }
  });

}, {name: 'service'}); */
Router.route('/abuse', {name: 'abuse'});
Router.route('/contacts', {name: 'contacts'});
Router.route('/admin', {name: 'admin'});
Router.route('/login', {name: 'login'});


