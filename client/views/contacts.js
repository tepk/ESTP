Template.contacts.onCreated(function() {
        this.isRendered = new ReactiveVar(false);
    }
)
Template.contacts.onRendered(function() {
        var self = this;
        Meteor.setTimeout(function(){
            self.isRendered.set(true)
        }, 5000)
    }
)
Template.contacts.helpers({
    isRendered: function(){
        return Template.instance().isRendered.get();
    }
})