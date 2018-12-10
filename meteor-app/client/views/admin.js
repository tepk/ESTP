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
            var pageURL = $(".pageURL").val();
            var pageTitle = $(".pageTitle").val();
            var pageContent = $("#input").val();

            Pages.insert({
                    url: $(".pageURL").val(),
                    title: $(".pageTitle").val(),
                    content: $("#input").val()           // message

            });
            Router.go($(".pageURL").val());
            e.preventDefault();
            return false;
        }
    })

Template.admin.onDestroyed(function () {
})