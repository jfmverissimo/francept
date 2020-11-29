$(document).ready(function() {
    $('.propertyContactForm').scrollToFixed({ marginTop: $('.PageHeader').height(), limit: $('.mainContent ').offset().top+ $('.mainContent ').height() - $('.propertyContactForm').height(),  removeOffsets: true});
});