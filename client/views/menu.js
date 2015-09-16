Template.menu.helpers({
    isConnected: function () {
        return Meteor.connection.status().status === "connected" ||
            Meteor.connection.status().status === "connecting";
    }
})
Template.menuUrl.helpers({
    isCurrentUrl: function (url) {
        return Router.current().url === url;
    }
})
