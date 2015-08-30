Template.contacts.onCreated(function() {

    }
)
Template.contacts.onRendered(function() {
        var self = this;

        var map;

        DG.then(function () {
            map = DG.map('map', {
                center: [54.903688, 83.115460],
                zoom: 16
            });
            DG.marker([54.904688, 83.121270]).addTo(map).bindPopup('Единая Служба Технической Поддержки. ' + 'Проезд Садовый, д. 53, цоколь второго подъезда.');
        });
});

Template.contacts.helpers({

})