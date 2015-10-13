Template.admin.onCreated(function () {

})

Template.admin.onRendered(function () {
    Meteor.setTimeout(function(){$("#input").cleditor()}, 100);
    this.autorun(function () {
        if (!Meteor.userId()) {
            Router.go('/login')
        }
    })
    console.log('init');
})

Template.admin.helpers({
    data: function () {
        return this;
    }
})

Template.admin.events(
    {
        "submit #myDiv": function (e, t) {
            var pageContent = $("#input").val();

            Pages.upsert(this.id, {
                $set: {
                    content: $("#input").val()           // message
                }
            });
            Router.go('/');
            e.preventDefault();
            return false;
        }
    })

Template.admin.onDestroyed(function () {
})