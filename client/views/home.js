Template.home.onCreated(function() {
  this.subscribe('pages');
})

Template.home.helpers({
  myAppVariable: function() {
    return Session.get('myAppVariable');
  }
});

Template.home.events({

});

Template.home.onRendered(function(){


})