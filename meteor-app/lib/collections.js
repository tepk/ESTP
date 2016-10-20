Pages = new Mongo.Collection("pages");

Pages.allow({
    insert: function (userId, doc) {
        // the user must be logged in, and the document must be owned by the user
        return !!userId;
    },
    update: function (userId, doc, fields, modifier) {
        // can only change your own documents
        return !!userId;
    }
});
