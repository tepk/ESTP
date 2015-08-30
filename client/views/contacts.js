Template.contacts.onCreated(function() {

    }
)
Template.contacts.onRendered(function() {
        var self = this;

        var map;
    var zoom = 10;
        DG.then(function () {
            map = DG.map('map', {
                center: [54.903688, 83.115460],
                zoom: zoom
            });
            DG.marker([54.904688, 83.121270]).addTo(map).bindPopup('Единая Служба Технической Поддержки. ' + 'Проезд Садовый, д. 53, цоколь второго подъезда.');
        });
        self.intervalId = Meteor.setInterval(function(){
            zoom++
            map.setZoom(zoom)
            if(zoom === 16){
                Meteor.clearInterval(self.intervalId);
            }
        }, 500);
});

Template.contacts.helpers({

})