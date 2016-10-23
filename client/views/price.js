Template.price.onCreated(function () {

})

Template.price.onRendered(function () {

})

Template.price.helpers({
    data: function () {
        return this;
    }
})

Template.price.events({
    "click .makePdf": function (e, t) {
        console.log('click')
        Blaze.outputAsPDF(Template.report, 'dataurlnewwindow');
    }
})