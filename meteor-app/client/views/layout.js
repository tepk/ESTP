Template.layout.onCreated(function () {

})

Template.layout.onRendered(function () {
    $('.dropdown-button').dropdown({
            inDuration: 200,
            outDuration: 200,
            constrain_width: true, // Does not change width of dropdown to that of the activator
            hover: false, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
    );
    $(".button-collapse").sideNav();

})

Template.layout.helpers({
    isCompany: function () {
        if(Router.current().url.indexOf('organization') > -1) {
                return 'Юр. лица'
        }
        return 'Физ. лица';
    },
    'click button': function(event, template) {
        Session.set('myAppVariable', Math.floor(Math.random() * 11));
    },
    isAdmin: function () {
        if(!Meteor.user()) {
            return false
        }
        return true
    }

})

Template.layoutUrl.helpers({
    isCurrentUrl: function (url) {
        return Router.current().url === url;
    }
})

Template.layout.events({
    "submit .new_post": function (e, t) {
        return false;
    }
})
