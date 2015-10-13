Template.mobile.onCreated(function () {

})

Template.mobile.onRendered(function () {
    $('#summernote').summernote({
            height: 300,                 // set editor height

            minHeight: null,             // set minimum height of editor
            maxHeight: null,             // set maximum height of editor

            focus: true,                 // set focus to editable area after initializing summernote
        });
})

Template.mobile.helpers({
    data: function () {
        return this;
    }
})

Template.mobile.events({
    "submit .new_post": function (e, t) {
        return false;
    }
})

Template.mobile.onDestroyed(function () {
    $('#summernote').destroy();
})